import type { ReactNode } from 'react';
import React, { useEffect, useState } from 'react';
import { clear, readFromStorage, writeToStorage } from '@helpers/Storage';
import { Unraid } from '@ridenui/unraid';
import { Credentials } from '../types/Generic';
import { ReactNativeExecutor } from '../unraid/unraid-ssh-executor';
import { SSHConfig } from '@ridenui/react-native-riden-ssh';

type UnraidProviderProps = {
  children: ReactNode;
};

type UnraidInstanceType = Unraid<SSHConfig, ReactNativeExecutor>;

export type UnraidProviderValue = {
  /** An instance of UNRAID API Client */
  instance: UnraidInstanceType | undefined;
  /** A function to set credentials */
  setCredentials: (credentials: Credentials) => Promise<void>;
  /** True if there are crendentials present */
  hasCredentials: boolean;
  /** True if the SSH Connection is established */
  isConnected: boolean;
  /** Device's Hostname */
  deviceName: string | null;
  /** Clear all credentials and all data stored by the app */
  clearCredentials: () => Promise<void>;
  /** Server Credentials */
  credentials: Credentials | null;
};

const initialUnraidState: UnraidProviderValue = {
  instance: undefined,
  setCredentials: async () => {},
  hasCredentials: false,
  isConnected: false,
  deviceName: null,
  clearCredentials: async () => {},
  credentials: null,
};

const UnraidContext = React.createContext<UnraidProviderValue>(initialUnraidState as UnraidProviderValue);

export function UnraidProvider({ children }: UnraidProviderProps): JSX.Element {
  const [instance, setInstance] = useState<UnraidInstanceType>();
  const [credentials, setCredentialsState] = useState<Credentials | null>(null);
  const [hasCredentials, setHasCredentials] = useState(false);
  const [isConnected, setIsConnected] = useState(false);
  const [deviceName, setDeviceName] = useState<string | null>(null);

  const setCredentials = async (creds: Credentials) => {
    await writeToStorage('credentials', JSON.stringify(creds));
    console.log('Setting credentials...');
    setCredentialsState(creds);
  };

  const clearCredentials = async () => {
    await clear();
    console.log('Clearing credentials...');
    setCredentialsState(null);
    setHasCredentials(false);
  };

  useEffect(() => {
    console.log('Running useEffect!');
    readFromStorage('credentials').then(creds => {
      if (creds) {
        const unraid = new Unraid({
          executor: ReactNativeExecutor,
          executorConfig: JSON.parse(creds),
        });
        setInstance(unraid);
        setHasCredentials(true);
        setCredentialsState(JSON.parse(creds));
        console.log('Connecting...');
        unraid.executor.connect().then(connected => {
          console.log('Connected...');
          setIsConnected(connected);
          unraid.system.getHostname().then(hostname => {
            console.log('got hostname!');
            setDeviceName(hostname);
          });
        });
      }
    });
  }, []);

  return (
    <UnraidContext.Provider
      value={{
        instance,
        setCredentials,
        hasCredentials,
        isConnected,
        deviceName,
        clearCredentials,
        credentials,
      }}>
      {children}
    </UnraidContext.Provider>
  );
}

export function useUnraid(): UnraidProviderValue {
  const context = React.useContext(UnraidContext);
  if (context === undefined) {
    throw new Error('useUnraid must be used within a UnraidProvider');
  }
  return context;
}

import type { ReactNode } from 'react';
import React, { useEffect, useState } from 'react';
import { clear, readFromStorage, writeToStorage } from '@helpers/Storage';
import { Unraid } from '@ridenui/unraid';
import { Credentials } from '../types/Generic';
import { ReactNativeExecutor } from '../unraid/unraid-ssh-executor';
import { SSHConfig } from '@ridenui/react-native-riden-ssh';
import { areValidCredentials } from '../validators/Credentials.validation';

type UnraidProviderProps = {
  children: ReactNode;
};

type UnraidInstanceType = Unraid<SSHConfig, ReactNativeExecutor>;

export type UnraidProviderValue = {
  /** An instance of UNRAID API Client */
  instance: UnraidInstanceType | null;
  /** A function to set credentials */
  setCredentials: (credentials: Credentials) => Promise<void>;
  /** True if there are crendentials present */
  hasCredentials: boolean;
  /** True if the SSH Connection is established */
  isConnected: boolean;
  /** Clear all credentials and all data stored by the app */
  clearCredentials: () => Promise<void>;
  /** Server Credentials */
  credentials: Credentials | null;
};

const initialUnraidState: UnraidProviderValue = {
  instance: null,
  setCredentials: async () => {},
  hasCredentials: false,
  isConnected: false,
  clearCredentials: async () => {},
  credentials: null,
};

const UnraidContext = React.createContext<UnraidProviderValue>(initialUnraidState);

export function UnraidProvider({ children }: UnraidProviderProps): JSX.Element {
  const [instance, setInstance] = useState<UnraidInstanceType | null>(null);
  const [credentials, setCredentialsState] = useState<Credentials | null>(null);
  const [hasCredentials, setHasCredentials] = useState(false);
  const [isConnected, setIsConnected] = useState(false);

  const setCredentials = async (creds: Credentials) => {
    await writeToStorage('credentials', JSON.stringify(creds));
    console.log('Setting credentials...');
    setCredentialsState(creds);
  };

  const clearCredentials = async () => {
    setInstance(null);
    await clear();
    console.log('Clearing credentials...');
    setCredentialsState(null);
    setHasCredentials(false);
  };

  useEffect(() => {
    if (!credentials) {
      return;
    }
    areValidCredentials(credentials).then(async isValid => {
      if (!isValid) {
        await clearCredentials();
      }
      console.log('Initializing after Credential Change');
      const unraid = new Unraid({
        executor: ReactNativeExecutor,
        executorConfig: {
          ...credentials,
        },
      });
      setInstance(unraid);
      setHasCredentials(true);
      console.log('Connecting after Cred Change');
      unraid.executor.connect().then(connected => {
        console.log('Connected...');
        setIsConnected(connected);
      });
    });
  }, [credentials]);

  useEffect(() => {
    console.log('Running onLoad useEffect!');
    readFromStorage('credentials').then(async creds => {
      if (creds) {
        const parsedCredentials = JSON.parse(creds);
        if (!(await areValidCredentials(parsedCredentials))) {
          alert('the credentials are invalid. please login again.');
          await clearCredentials();
          return;
        }
        setHasCredentials(true);
        setCredentialsState(parsedCredentials);
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
        clearCredentials,
        credentials,
      }}
    >
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

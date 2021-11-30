import type { ReactNode } from 'react';
import React, { useEffect, useState } from 'react';
import { readFromStorage, writeToStorage } from '@helpers/Storage';
import { Unraid } from '@ridenui/unraid/dist/instance/unraid';
import { Credentials } from '../types/Generic';
import { ReactNativeExecutor, SSHConfig } from '@ridenui/unraid/dist/executors/ReactNativeSSH';

type UnraidProviderProps = {
  children: ReactNode;
};

type UnraidInstanceType = Unraid<SSHConfig, ReactNativeExecutor>;

export type UnraidProviderValue = {
  /** An instance of UNRAID API Client */
  instance: UnraidInstanceType | undefined;
  /** A function to set credentials */
  setCredentials: (credentials: Credentials) => void;
  /** True if there are crendentials present */
  hasCredentials: boolean;
};

const initialUnraidState: UnraidProviderValue = {
  instance: undefined,
  setCredentials: async () => {},
  hasCredentials: false,
};

const UnraidContext = React.createContext<UnraidProviderValue>(initialUnraidState as UnraidProviderValue);

export function UnraidProvider({ children }: UnraidProviderProps): JSX.Element {
  const [instance, setInstance] = useState<UnraidInstanceType>();
  const [credentials, setCredentialsState] = useState<Credentials | null>(null);
  const [hasCredentials, setHasCredentials] = useState(false);

  const setCredentials = async (creds: Credentials) => {
    await writeToStorage('credentials', JSON.stringify(creds));
    setCredentialsState(credentials);
  };

  useEffect(() => {
    /** Load credentials on App Start */
    readFromStorage('credentials').then(creds => {
      if (creds) {
        const unraid = new Unraid({
          executor: ReactNativeExecutor,
          executorConfig: credentials,
        });
        setInstance(unraid);
        setHasCredentials(true);
      }
    });
  }, [credentials]);

  return (
    <UnraidContext.Provider
      value={{
        instance,
        setCredentials,
        hasCredentials,
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

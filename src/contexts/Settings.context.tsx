import type { ReactNode } from 'react';
import React, { useEffect, useState } from 'react';
import { readFromStorage } from '@helpers/Storage';
import { ConfigValues } from '../constants';

type SettingsProviderProps = {
  children: ReactNode;
};

export type SettingsProviderValue = {
  dashboard: {
    cpuRefresh: number;
  };
  reloadSettings: () => void;
};

const initialSettingsState: SettingsProviderValue = {
  dashboard: {
    cpuRefresh: 5000,
  },
  reloadSettings: () => {},
};

const SettingsContext = React.createContext<SettingsProviderValue>(initialSettingsState as SettingsProviderValue);

export function SettingsProvider({ children }: SettingsProviderProps): JSX.Element {
  const [cpuRefresh, setCpuRefresh] = useState<number>(5000);

  const reloadSettings = () => {
    readFromStorage(ConfigValues.cpuRefresh).then(value => {
      if (!value) {
        return;
      }
      const asNumber = Number.parseInt(value, 10);
      if (!isNaN(asNumber)) {
        setCpuRefresh(asNumber);
      }
    });
  };

  useEffect(() => {
    reloadSettings();
  }, []);

  return (
    <SettingsContext.Provider
      value={{
        reloadSettings,
        dashboard: {
          cpuRefresh,
        },
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
}

export function useSettings(): SettingsProviderValue {
  const context = React.useContext(SettingsContext);
  if (context === undefined) {
    throw new Error('useSettings must be used within a SettingsProvider');
  }
  return context;
}

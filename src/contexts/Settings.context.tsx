import type { ReactNode } from 'react';
import React, { useEffect, useState } from 'react';
import { log } from '@helpers/Logger';
import { readMultipleFromStorage } from '@helpers/Storage';
import { ConfigValues } from '../constants';
import { Themes } from '../types/Generic';

type SettingsProviderProps = {
  children: ReactNode;
};

export type SettingsProviderValue = {
  dashboard: {
    cpuRefresh: number;
  };
  generic: {
    themeName: Themes;
  };
  reloadSettings: () => void;
};

const initialSettingsState: SettingsProviderValue = {
  dashboard: {
    cpuRefresh: 5000,
  },
  generic: {
    themeName: Themes.DARK,
  },
  reloadSettings: () => {},
};

const SettingsContext = React.createContext<SettingsProviderValue>(initialSettingsState);

export function SettingsProvider({ children }: SettingsProviderProps): JSX.Element {
  const [cpuRefresh, setCpuRefresh] = useState<number>(5000);
  const [themeName, setThemeName] = useState<Themes>(Themes.DARK);

  const reloadSettings = () => {
    log.debug('Reloading Settings');
    readMultipleFromStorage([ConfigValues.cpuRefresh, ConfigValues.theme]).then((result) => {
      const loadedCpuRefresh = Number.parseInt(result[ConfigValues.cpuRefresh] || '5000', 10);
      const loadedTheme = result[ConfigValues.theme] === 'light' ? Themes.LIGHT : Themes.DARK;
      setCpuRefresh(loadedCpuRefresh);
      setThemeName(loadedTheme);
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
        generic: {
          themeName,
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

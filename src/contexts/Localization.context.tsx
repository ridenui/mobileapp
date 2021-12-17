import type { ReactNode } from 'react';
import React, { useEffect, useState } from 'react';
import * as RNLocalize from 'react-native-localize';

type LocalizationProviderProps = {
  children: ReactNode;
};

export type LocalizationProviderValue = {
  country: string;
};

const initialLocalizationState: LocalizationProviderValue = {
  country: '',
};

const LocalizationContext = React.createContext<LocalizationProviderValue>(
  initialLocalizationState as LocalizationProviderValue,
);

export function LocalizationProvider({ children }: LocalizationProviderProps): JSX.Element {
  const [country, setCountry] = useState<string>('');

  const reloadLocalization = () => {
    setCountry(RNLocalize.getCountry());
  };

  useEffect(() => {
    reloadLocalization();
    RNLocalize.addEventListener('change', reloadLocalization);
    return () => RNLocalize.removeEventListener('change', reloadLocalization);
  }, []);

  return (
    <LocalizationContext.Provider
      value={{
        country,
      }}
    >
      {children}
    </LocalizationContext.Provider>
  );
}

export function useLocalization(): LocalizationProviderValue {
  const context = React.useContext(LocalizationContext);
  if (context === undefined) {
    throw new Error('useLocalization must be used within a LocalizationProvider');
  }
  return context;
}

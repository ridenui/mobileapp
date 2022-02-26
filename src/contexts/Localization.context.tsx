import type { ReactNode } from 'react';
import React, { useEffect, useState } from 'react';
import * as RNLocalize from 'react-native-localize';
import { getDateFnsLocale } from '@helpers/Locales';
import { log } from '@helpers/Logger';
import type { Locale } from 'date-fns';
import * as Locales from 'date-fns/locale';

type LocalizationProviderProps = {
  children: ReactNode;
};

export type LocalizationProviderValue = {
  country: string;
  dateFnsLocale: Locale;
};

const initialLocalizationState: LocalizationProviderValue = {
  country: '',
  dateFnsLocale: Locales.enUS,
};

const LocalizationContext = React.createContext<LocalizationProviderValue>(initialLocalizationState);

export function LocalizationProvider({ children }: LocalizationProviderProps): JSX.Element {
  const [country, setCountry] = useState<string>('');
  const [dateFnsLocale, setDateFnsLocale] = useState<Locale>(Locales.enUS);

  const reloadLocalization = () => {
    const deviceCountry = RNLocalize.getCountry();
    setCountry(deviceCountry);
    setDateFnsLocale(getDateFnsLocale(deviceCountry));
  };

  useEffect(() => {
    reloadLocalization();
    RNLocalize.addEventListener('change', () => {
      log.info('Localization change');
      reloadLocalization();
    });

    return () => {
      RNLocalize.removeEventListener('change', reloadLocalization);
      log.debug('Removed localization change listener');
    };
  }, []);

  return (
    <LocalizationContext.Provider
      value={{
        country,
        dateFnsLocale,
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

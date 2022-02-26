import 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react';
import { StatusBar } from 'react-native';
import { dark, light } from '@styles/Themes';
import { ThemeProvider } from 'styled-components/native';
import { LocalizationProvider } from './src/contexts/Localization.context';
import { ServerProvider } from './src/contexts/Server.context';
import { SettingsProvider, useSettings } from './src/contexts/Settings.context';
import { UnraidProvider } from './src/contexts/Unraid.context';
import { SplashScreen } from './src/screens/splash/Splash.screen';
import { Themes } from './src/types/Generic';

function App() {
  const {
    generic: { themeName },
  } = useSettings();
  const [theme, setTheme] = useState(dark);

  useEffect(() => {
    if (themeName === Themes.LIGHT) {
      setTheme(light);
    } else {
      setTheme(dark);
    }
  }, [themeName]);

  return (
    <ThemeProvider theme={theme}>
      <LocalizationProvider>
        <UnraidProvider>
          <ServerProvider>
            <StatusBar barStyle={theme === dark ? 'light-content' : 'dark-content'} />
            <SplashScreen />
          </ServerProvider>
        </UnraidProvider>
      </LocalizationProvider>
    </ThemeProvider>
  );
}

export function WithSettingsProvider() {
  return (
    <SettingsProvider>
      <App />
    </SettingsProvider>
  );
}

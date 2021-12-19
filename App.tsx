import React, { useEffect, useState } from 'react';
import { StatusBar, useColorScheme } from 'react-native';
import { dark, light } from '@styles/Themes';
import { ThemeProvider } from 'styled-components/native';
import { UnraidProvider } from './src/contexts/Unraid.context';
import { SplashScreen } from './src/screens/splash/Splash.screen';
import { ServerProvider } from './src/contexts/Server.context';
import { LocalizationProvider } from './src/contexts/Localization.context';
import { SettingsProvider } from './src/contexts/Settings.context';

export function App() {
  const colorScheme = useColorScheme();
  const [theme, setTheme] = useState(light);

  useEffect(() => {
    if (colorScheme === 'dark') {
      setTheme(dark);
    } else {
      setTheme(light);
    }
  }, [colorScheme]);

  return (
    <ThemeProvider theme={theme}>
      <SettingsProvider>
        <LocalizationProvider>
          <UnraidProvider>
            <ServerProvider>
              <StatusBar barStyle={theme === dark ? 'light-content' : 'dark-content'} />
              <SplashScreen />
            </ServerProvider>
          </UnraidProvider>
        </LocalizationProvider>
      </SettingsProvider>
    </ThemeProvider>
  );
}
export default App;

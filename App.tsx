import 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react';
import { StatusBar, useColorScheme } from 'react-native';
import { log } from '@helpers/Logger';
import { dark, light } from '@styles/Themes';
import { ThemeProvider } from 'styled-components/native';
import { LocalizationProvider } from './src/contexts/Localization.context';
import { ServerProvider } from './src/contexts/Server.context';
import { SettingsProvider } from './src/contexts/Settings.context';
import { UnraidProvider } from './src/contexts/Unraid.context';
import { SplashScreen } from './src/screens/splash/Splash.screen';

export function App() {
  const colorScheme = useColorScheme();
  const [theme, setTheme] = useState(light);

  useEffect(() => {
    if (colorScheme === 'dark') {
      log.debug('theme = dark');
      setTheme(dark);
    } else {
      log.debug('theme = light');
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

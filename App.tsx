import React, { useEffect, useState } from 'react';
import { StatusBar, useColorScheme } from 'react-native';
import { dark, light } from '@styles/Themes';
import { ThemeProvider } from 'styled-components/native';
import { UnraidProvider } from './src/contexts/Unraid.context';
import { SplashScreen } from './src/screens/splash/Splash.screen';
import { ServerProvider } from './src/contexts/Server.context';
import { LocalizationProvider } from './src/contexts/Localization.context';

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
export default App;

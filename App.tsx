import React, { useEffect, useState } from 'react';
import { StatusBar, useColorScheme } from 'react-native';
import { dark, light } from '@styles/Themes';
import { ThemeProvider } from 'styled-components/native';
import { UnraidProvider } from './src/contexts/Unraid.context';
import { SplashScreen } from './src/screens/splash/Splash.screen';

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
      <UnraidProvider>
        <StatusBar barStyle={'dark-content'} />
        <SplashScreen />
      </UnraidProvider>
    </ThemeProvider>
  );
}
export default App;

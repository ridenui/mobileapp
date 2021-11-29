import React, { useEffect, useState } from 'react';
import { StatusBar, useColorScheme } from 'react-native';
import { dark, light } from '@styles/Themes';
import { NavigationContainer } from '@react-navigation/native';
import { MainStack } from './src/navigation/MainStack';
import { LoginScreen } from './src/screens/login/Login.screen';
import { ThemeProvider } from 'styled-components/native';

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
      <StatusBar barStyle={'dark-content'} />
      <NavigationContainer>
        <MainStack.Navigator>
          <MainStack.Screen
            name={'Login'}
            component={LoginScreen}
            options={{ headerShown: false }}
          />
        </MainStack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
}
export default App;

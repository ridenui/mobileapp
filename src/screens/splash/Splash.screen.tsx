import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { MainStack } from '../../navigation/MainStack';
import { SideMenuNavigation } from '../../navigation/SideMenuStack';
import { ConnectingScreen } from '../connecting/Connecting.screen';
import { LoginScreen } from '../login/Login.screen';

/**
 * First Screen to be drawn at app launch. Also handles the Navigation.
 */
export function SplashScreen() {
  return (
    <NavigationContainer>
      <MainStack.Navigator
        initialRouteName={'Connecting'}
        screenOptions={{
          headerShown: false,
        }}
      >
        <MainStack.Screen name={'Connecting'} component={ConnectingScreen} />
        <MainStack.Screen name={'Login'} component={LoginScreen} />
        <MainStack.Screen name={'Main'} component={SideMenuNavigation} />
      </MainStack.Navigator>
    </NavigationContainer>
  );
}

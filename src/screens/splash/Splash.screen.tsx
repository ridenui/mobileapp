import React, { useEffect, useState } from 'react';
import { useUnraid } from '../../contexts/Unraid.context';
import { NavigationContainer } from '@react-navigation/native';
import { MainStack } from '../../navigation/MainStack';
import { LoginScreen } from '../login/Login.screen';
import { DashboardScreen } from '../dashboard/Dashboard.screen';

enum LoadingStates {
  LOADING,
  LOADED_LOGGED_IN,
  LOADED_LOGGED_OUT,
}

/**
 * First Screen to be drawn at app launch. Also handles the Navigation.
 */
export function SplashScreen() {
  const [loadingState, setLoadingState] = useState<LoadingStates>(LoadingStates.LOADING);
  const unraid = useUnraid();

  useEffect(() => {
    // More logic will be added to this later (checking for valid creds and so on)
    if (unraid.hasCredentials) {
      setLoadingState(LoadingStates.LOADED_LOGGED_IN);
    }
  }, [unraid.hasCredentials]);

  return (
    <>
      <NavigationContainer>
        {loadingState !== LoadingStates.LOADING && (
          <MainStack.Navigator>
            {loadingState === LoadingStates.LOADED_LOGGED_OUT && (
              <MainStack.Screen name={'Login'} component={LoginScreen} options={{ headerShown: false }} />
            )}
            <MainStack.Screen name={'Dashboard'} component={DashboardScreen} />
          </MainStack.Navigator>
        )}
      </NavigationContainer>
    </>
  );
}

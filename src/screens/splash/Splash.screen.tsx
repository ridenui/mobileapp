import React, { useEffect, useState } from 'react';
import { useUnraid } from '../../contexts/Unraid.context';
import { NavigationContainer } from '@react-navigation/native';
import { MainStack } from '../../navigation/MainStack';
import { LoginScreen } from '../login/Login.screen';
import { DashboardScreen } from '../dashboard/Dashboard.screen';
import { Button } from 'react-native';
import { ConnectingScreen } from '../connecting/Connecting.screen';
import { DebugScreen } from '../debug/Debug.screen';
import { DEBUG } from '../../constants';

/**
 * Defines the stated we can have while connecting.
 * If everything goes well, the order would be LOADING => LOADED_LOGGED_IN => CONNECTED_LOGGED_IN
 * If there are no credentials (eg. first app start) it'd be LOADING => LOADED_LOGGED_OUT
 * If there are credentials, but we cannot connect it'd be LOADING => LOADED_LOGGED_IN
 */
enum LoadingStates {
  // App has started
  LOADING,
  // App found credentials in storage
  LOADED_LOGGED_IN,
  // No credentials found
  LOADED_LOGGED_OUT,
  // Credentials found and validated
  CONNECTED_LOGGED_IN,
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
      if (unraid.isConnected) {
        setLoadingState(LoadingStates.CONNECTED_LOGGED_IN);
      } else {
        setLoadingState(LoadingStates.LOADED_LOGGED_IN);
      }
    } else {
      setLoadingState(LoadingStates.LOADED_LOGGED_OUT);
    }
  }, [unraid.hasCredentials, unraid.isConnected]);

  /** Temporary Logout Method for debugging */
  const logout = () => {
    unraid.clearCredentials();
  };

  return (
    <>
      <NavigationContainer>
        {loadingState !== LoadingStates.LOADING && (
          <MainStack.Navigator>
            {loadingState === LoadingStates.LOADED_LOGGED_OUT && (
              <MainStack.Screen name={'Login'} component={LoginScreen} options={{ headerShown: false }} />
            )}
            {loadingState === LoadingStates.LOADED_LOGGED_IN && (
              <MainStack.Screen name={'Connecting'} component={ConnectingScreen} options={{ headerShown: false }} />
            )}
            {loadingState === LoadingStates.CONNECTED_LOGGED_IN && !DEBUG && (
              <>
                <MainStack.Screen
                  name={'Dashboard'}
                  component={DashboardScreen}
                  options={{
                    title: unraid.deviceName || 'Dashboard',
                    headerLeft: () => {
                      return <Button title={'Logout'} onPress={logout} />;
                    },
                  }}
                />
              </>
            )}
            {loadingState === LoadingStates.CONNECTED_LOGGED_IN && DEBUG && (
              <>
                <MainStack.Screen
                  name={'Debug'}
                  component={DebugScreen}
                  options={{
                    title: unraid.deviceName || 'Debug',
                    headerLeft: () => {
                      return <Button title={'Logout'} onPress={logout} />;
                    },
                  }}
                />
              </>
            )}
          </MainStack.Navigator>
        )}
      </NavigationContainer>
    </>
  );
}

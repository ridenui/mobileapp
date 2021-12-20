import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { getNavigationStyle } from '@styles/NavigationStyle';
import { useTheme } from 'styled-components/native';
import { DEBUG } from '../constants';
import { DebugScreen } from '../screens/debug/Debug.screen';
import { SettingsScreen } from '../screens/settings/Settings.screen';
import { Dashboard } from './DashboardStack';
import { getTabBarIcon } from './TabStack.helpers';

export const TabStack = createBottomTabNavigator();

export function TabNavigation() {
  const theme = useTheme();

  return (
    <TabStack.Navigator
      initialRouteName={'DashboardStack'}
      screenOptions={({ route }) => ({
        lazy: true,
        tabBarIcon: ({ focused, color, size }) => {
          return getTabBarIcon(route.name, focused, color, size);
        },
        headerShown: false,
        ...getNavigationStyle(theme),
      })}
    >
      <TabStack.Screen
        name={'DashboardStack'}
        component={Dashboard}
        options={{
          tabBarLabel: 'Dashboard',
        }}
      />
      <TabStack.Screen name={'Settings'} component={SettingsScreen} options={{ headerShown: true }} />
      {DEBUG && <TabStack.Screen name={'Debug'} component={DebugScreen} />}
    </TabStack.Navigator>
  );
}

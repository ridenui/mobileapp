import React from 'react';
import { DrawerToggle } from '@atoms/DrawerToggle/DrawerToggle';
import { SideDrawer } from '@organisms/SideDrawer/SideDrawer';
import type { DrawerNavigationProp } from '@react-navigation/drawer';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { getNavigationStyle } from '@styles/NavigationStyle';
import { useTheme } from 'styled-components/native';
import { DEBUG } from '../constants';
import { DebugScreen } from '../screens/debug/Debug.screen';
import { SettingsScreen } from '../screens/settings/Settings.screen';
import { Dashboard } from './DashboardStack';
import { getDrawerIcon } from './SideMenuStack.helpers';

export type SideMenuStackParamList = {
  DashboardStack: undefined;
  Settings: undefined;
  Debug: undefined;
};

export type SideMenuScreenNavigationProp = DrawerNavigationProp<SideMenuStackParamList>;

export const SideMenuStack = createDrawerNavigator<SideMenuStackParamList>();

export function SideMenuNavigation() {
  const theme = useTheme();

  return (
    <SideMenuStack.Navigator
      initialRouteName={'DashboardStack'}
      drawerContent={(props) => <SideDrawer props={props} />}
      screenOptions={({ route }) => ({
        lazy: true,
        drawerIcon: ({ focused, color, size }) => {
          return getDrawerIcon(route.name, focused, color, size);
        },
        headerLeft: () => <DrawerToggle />,
        ...getNavigationStyle(theme),
      })}
    >
      <SideMenuStack.Screen name={'DashboardStack'} component={Dashboard} options={{ headerShown: false }} />
      <SideMenuStack.Screen name={'Settings'} component={SettingsScreen} />
      {DEBUG && <SideMenuStack.Screen name={'Debug'} component={DebugScreen} />}
    </SideMenuStack.Navigator>
  );
}

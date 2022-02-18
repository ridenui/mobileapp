import React, { useEffect, useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { DrawerToggle } from '@atoms/DrawerToggle/DrawerToggle';
import { Icon } from '@atoms/Icon/Icon';
import { createStackNavigator } from '@react-navigation/stack';
import { useTheme } from 'styled-components/native';
import { useServer } from '../contexts/Server.context';
import { DashboardScreen } from '../screens/dashboard/Dashboard.screen';
import { NotificationsScreen } from '../screens/notifications/Notifications';

type DashboardStackParamList = {
  Dashboard: undefined;
  Notifications: undefined;
};

export const DashboardStack = createStackNavigator<DashboardStackParamList>();

export function Dashboard() {
  const theme = useTheme();
  const { notifications } = useServer();
  const [notificationCount, setNotificationCount] = useState(0);

  useEffect(() => {
    const unread = notifications.filter(({ isArchived }) => !isArchived);
    setNotificationCount(unread.length);
  }, [notifications]);

  return (
    <DashboardStack.Navigator
      initialRouteName={'Dashboard'}
      screenOptions={{
        headerStyle: {
          backgroundColor: theme['700'],
          shadowColor: theme['500'],
        },
        headerTitleStyle: {
          color: theme.text,
        },
      }}
    >
      <DashboardStack.Screen
        name={'Dashboard'}
        component={DashboardScreen}
        options={({ navigation }) => ({
          headerLeft: () => <DrawerToggle />,
          headerRight: () => {
            return (
              <TouchableOpacity style={{ marginRight: 16 }} onPress={() => navigation.navigate('Notifications')}>
                <Icon badge={notificationCount} name={'bell'} size={24} />
              </TouchableOpacity>
            );
          },
        })}
      />
      <DashboardStack.Screen name={'Notifications'} component={NotificationsScreen} />
    </DashboardStack.Navigator>
  );
}

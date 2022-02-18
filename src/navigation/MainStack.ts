import { createStackNavigator } from '@react-navigation/stack';

export type MainStackParamList = {
  Login: undefined;
  Main: undefined;
  Connecting: undefined;
  Notifications: undefined;
};

export const MainStack = createStackNavigator<MainStackParamList>();

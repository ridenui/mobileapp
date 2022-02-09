import React from 'react';
import Feather from 'react-native-vector-icons/Feather';

export function getDrawerIcon(route: string, focused: boolean, color: string, size: number) {
  let icon;
  switch (route) {
    case 'DashboardStack':
      icon = 'grid';
      break;
    case 'Settings':
      icon = 'settings';
      break;
    default:
      icon = 'help-circle';
  }

  return <Feather name={icon} color={color} size={size} />;
}
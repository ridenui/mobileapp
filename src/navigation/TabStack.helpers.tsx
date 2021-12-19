import React from 'react';
import Feather from 'react-native-vector-icons/Feather';

export function getTabBarIcon(route: string, focused: boolean, color: string, size: number) {
  let icon = 'help-circle';
  switch (route) {
    case 'Dashboard':
      icon = 'monitor';
      break;
    case 'Settings':
      icon = 'settings';
  }

  return <Feather name={icon} color={color} size={size} />;
}

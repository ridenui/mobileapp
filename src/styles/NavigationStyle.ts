import type { DrawerNavigationOptions } from '@react-navigation/drawer';
import type { Theme } from '@styles/Themes';

export function getNavigationStyle(theme: Theme): Partial<DrawerNavigationOptions> {
  return {
    headerStyle: {
      backgroundColor: theme['700'],
      shadowColor: theme['500'],
    },
    headerTitleStyle: {
      color: theme.text,
    },
    drawerStyle: {
      backgroundColor: theme['700'],
      shadowColor: theme['500'],
      borderTopColor: theme['500'],
    },
    drawerActiveTintColor: theme['100'],
    drawerInactiveTintColor: theme['400'],
  };
}

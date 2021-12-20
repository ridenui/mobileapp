import type { Theme } from '@styles/Themes';

export function getNavigationStyle(theme: Theme) {
  return {
    headerStyle: {
      backgroundColor: theme['700'],
      shadowColor: theme['500'],
    },
    headerTitleStyle: {
      color: theme.text,
    },
    tabBarStyle: {
      backgroundColor: theme['700'],
      shadowColor: theme['500'],
      borderTopColor: theme['500'],
    },
    tabBarActiveTintColor: theme['100'],
    tabBarInactiveTintColor: theme['600'],
  };
}

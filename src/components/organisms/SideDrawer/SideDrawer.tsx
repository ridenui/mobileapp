import React from 'react';
import { View } from 'react-native';
import { DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer';
import type { DrawerContentComponentProps } from '@react-navigation/drawer/lib/typescript/src/types';
import { getNavigationStyle } from '@styles/NavigationStyle';
import { useTheme } from 'styled-components';
import { useUnraid } from '../../../contexts/Unraid.context';
import { getDrawerIcon } from '../../../navigation/SideMenuStack.helpers';
import * as S from './SideDrawer.styled';

export interface SideDrawerProps {
  props: DrawerContentComponentProps;
}

export function SideDrawer({ props }: SideDrawerProps): JSX.Element {
  const { clearCredentials } = useUnraid();
  const theme = useTheme();
  const styles = getNavigationStyle(theme);

  return (
    <S.SideDrawer>
      <DrawerContentScrollView {...props}>
        <DrawerItemList state={props.state} navigation={props.navigation} descriptors={props.descriptors} />
      </DrawerContentScrollView>
      <View>
        <DrawerItem
          label={'Logout'}
          onPress={() => clearCredentials()}
          activeBackgroundColor={styles.drawerActiveBackgroundColor}
          activeTintColor={styles.drawerActiveTintColor}
          inactiveBackgroundColor={styles.drawerInactiveBackgroundColor}
          inactiveTintColor={styles.drawerInactiveTintColor}
          icon={({ focused, color, size }) => {
            return getDrawerIcon('Logout', focused, color, size);
          }}
        />
      </View>
    </S.SideDrawer>
  );
}

import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Icon } from '@atoms/Icon/Icon';
import { useNavigation } from '@react-navigation/native';
import type { SideMenuScreenNavigationProp } from '../../../navigation/SideMenuStack';

export function DrawerToggle(): JSX.Element {
  const navigation = useNavigation<SideMenuScreenNavigationProp>();

  return (
    <TouchableOpacity style={{ marginLeft: 16 }} onPress={() => navigation.openDrawer()}>
      <Icon name={'menu'} size={24} />
    </TouchableOpacity>
  );
}

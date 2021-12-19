import React from 'react';
import { FlatList, RefreshControl } from 'react-native';
import { Notification } from '@molecules/Notification/Notification';
import { useServer } from '../../contexts/Server.context';
import * as S from './Notifications.styled';

export function NotificationsScreen(): JSX.Element {
  const { notifications, isReloading, reloadProperty } = useServer();

  return (
    <S.Container>
      <FlatList
        refreshing={isReloading}
        onRefresh={() => reloadProperty('notifications')}
        refreshControl={<RefreshControl refreshing={isReloading} onRefresh={() => reloadProperty('notifications')} />}
        data={notifications}
        renderItem={(item) => <Notification notification={item.item} />}
      />
    </S.Container>
  );
}

import React, { useEffect, useState } from 'react';
import { FlatList, RefreshControl } from 'react-native';
import { Typography, TypographyVariants } from '@atoms/Typography/Typography';
import { ContainerCard } from '@molecules/ContainerCard/ContainerCard';
import { ListEmptyComponent } from '@molecules/ListEmptyComponent/ListEmptyComponent';
import { Notification } from '@molecules/Notification/Notification';
import type { Container } from '@ridenui/unraid/dist/modules/docker/docker.types';
import { useServer } from '../../contexts/Server.context';
import * as S from './DockerContainerList.styled';

export function DockerContainerListScreen(): JSX.Element {
  const {
    docker: { containers },
    isReloading,
    reloadProperty,
  } = useServer();

  return (
    <S.Container>
      <FlatList
        refreshing={isReloading}
        onRefresh={() => reloadProperty('docker:containers')}
        refreshControl={
          <RefreshControl refreshing={isReloading} onRefresh={() => reloadProperty('docker:containers')} />
        }
        data={containers}
        renderItem={(item) => <ContainerCard container={item.item} />}
        ListEmptyComponent={<ListEmptyComponent />}
      />
    </S.Container>
  );
}

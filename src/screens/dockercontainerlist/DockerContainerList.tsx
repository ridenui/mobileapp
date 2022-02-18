import React, { useEffect, useState } from 'react';
import { FlatList, RefreshControl } from 'react-native';
import { ContainerCard } from '@molecules/ContainerCard/ContainerCard';
import { ListEmptyComponent } from '@molecules/ListEmptyComponent/ListEmptyComponent';
import { SearchBar } from '@molecules/SearchBar/SearchBar';
import Fuse from 'fuse.js';
import { useServer } from '../../contexts/Server.context';
import * as S from './DockerContainerList.styled';

export function DockerContainerListScreen(): JSX.Element {
  const [search, setSearch] = useState('');
  const {
    docker: { containers },
    isReloading,
    reloadProperty,
  } = useServer();
  const [filteredContainers, setFilteredContainers] = useState([containers[0]]);

  useEffect(() => {
    if (!search) {
      return setFilteredContainers(containers);
    }
    const fuse = new Fuse(containers, {
      keys: ['name'],
    });
    const results = fuse.search(search);
    const items = results.map((result) => result.item);

    return setFilteredContainers(items);
  }, [search, containers]);

  return (
    <S.Container>
      <SearchBar placeholder={'Search containers'} onChangeText={setSearch} value={search} />
      <FlatList
        refreshing={isReloading}
        onRefresh={() => reloadProperty('docker:containers')}
        refreshControl={
          <RefreshControl refreshing={isReloading} onRefresh={() => reloadProperty('docker:containers')} />
        }
        data={filteredContainers}
        renderItem={(item) => <ContainerCard container={item.item} />}
        ListEmptyComponent={<ListEmptyComponent />}
      />
    </S.Container>
  );
}

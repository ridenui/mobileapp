import React from 'react';
import { FlatList, RefreshControl } from 'react-native';
import { FeatureNotInstalled } from '@molecules/FeatureNotInstalled/FeatureNotInstalled';
import { ListEmptyComponent } from '@molecules/ListEmptyComponent/ListEmptyComponent';
import { UserScriptCard } from '@molecules/UserScriptCard/UserScriptCard';
import { useServer } from '../../contexts/Server.context';
import * as S from './UserScripts.styled';

/**
 * Lists all your userscripts
 */
export function UserScriptsScreen(): JSX.Element {
  const { userScripts, isReloading, reloadProperty } = useServer();

  if (!userScripts.installed) {
    return (
      <S.Container>
        <FeatureNotInstalled
          featureName={'User Scripts'}
          installationDescription={'Install it via Community Applications'}
        />
      </S.Container>
    );
  }

  return (
    <S.Container>
      <FlatList
        refreshing={isReloading}
        onRefresh={() => reloadProperty('userscripts:all')}
        refreshControl={<RefreshControl refreshing={isReloading} onRefresh={() => reloadProperty('userscripts:all')} />}
        data={userScripts.scripts}
        renderItem={(item) => <UserScriptCard script={item} />}
        ListEmptyComponent={<ListEmptyComponent />}
      />
    </S.Container>
  );
}

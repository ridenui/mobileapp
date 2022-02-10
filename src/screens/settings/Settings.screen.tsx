import React from 'react';
import { ScrollView } from 'react-native';
import VersionInfo from 'react-native-version-info';
import { ButtonVariants } from '@atoms/Button/Button';
import { HorizontalDivider } from '@atoms/HorizontalDivider/HorizontalDivider';
import { Typography, TypographyVariants } from '@atoms/Typography/Typography';
import { useServer } from '../../contexts/Server.context';
import { useUnraid } from '../../contexts/Unraid.context';
import { CPUDelay } from './components/CPUDelay';
import { Log } from './components/Log';
import { Theme } from './components/Theme';
import * as S from './Settings.styled';

export function SettingsScreen() {
  const { clearCredentials } = useUnraid();
  const { resetProperties } = useServer();

  return (
    <S.Container>
      <ScrollView>
        <CPUDelay />
        <Log />
        <Theme />
        <S.LogoutButton
          variant={ButtonVariants.FLAT}
          textStyle={TypographyVariants.Mono}
          onPress={() => {
            resetProperties();
            clearCredentials();
          }}
        >
          Logout
        </S.LogoutButton>
        <S.VersionInfo>
          <HorizontalDivider width={'95%'} />
          <Typography variant={TypographyVariants.Overline}>RIDEN UI</Typography>
          <Typography variant={TypographyVariants.Small}>
            v{VersionInfo.buildVersion} ({VersionInfo.buildVersion})
          </Typography>
        </S.VersionInfo>
      </ScrollView>
    </S.Container>
  );
}

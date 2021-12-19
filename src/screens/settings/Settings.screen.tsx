import React from 'react';
import { Typography, TypographyVariants } from '@atoms/Typography/Typography';
import * as S from './Settings.styled';
import VersionInfo from 'react-native-version-info';
import { HorizontalDivider } from '@atoms/HorizontalDivider/HorizontalDivider';
import { Button, ButtonVariants } from '@atoms/Button/Button';
import { useUnraid } from '../../contexts/Unraid.context';
import { CPUDelay } from './components/CPUDelay';

export function SettingsScreen() {
  const { clearCredentials } = useUnraid();

  return (
    <S.Container>
      <CPUDelay />
      <Button variant={ButtonVariants.FLAT} textStyle={TypographyVariants.Mono} onPress={clearCredentials}>
        Logout
      </Button>
      <S.VersionInfo>
        <HorizontalDivider width={'95%'} />
        <Typography variant={TypographyVariants.Overline}>RIDEN UI</Typography>
        <Typography variant={TypographyVariants.Small}>
          v{VersionInfo.buildVersion} ({VersionInfo.buildVersion})
        </Typography>
      </S.VersionInfo>
    </S.Container>
  );
}

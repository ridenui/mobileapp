import React from 'react';
import VersionInfo from 'react-native-version-info';
import { Button, ButtonVariants } from '@atoms/Button/Button';
import { HorizontalDivider } from '@atoms/HorizontalDivider/HorizontalDivider';
import { Typography, TypographyVariants } from '@atoms/Typography/Typography';
import { useUnraid } from '../../contexts/Unraid.context';
import { CPUDelay } from './components/CPUDelay';
import * as S from './Settings.styled';

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

import React, { useEffect, useState } from 'react';
import type { NativeStackScreenProps } from 'react-native-screens/native-stack';
import { Typography, TypographyVariants } from '@atoms/Typography/Typography';
import { log } from '@helpers/Logger';
import { Colors } from '@styles/Colors';
import * as LoadingLetter from '../../assets/Letter.json';
import { useUnraid } from '../../contexts/Unraid.context';
import type { MainStackParamList } from '../../navigation/MainStack';
import * as S from './Connecting.styled';

const SHOW_RESET_DELAY = 5000;

type ConnectingScreenProps = NativeStackScreenProps<MainStackParamList, 'Connecting'>;

export function ConnectingScreen({ navigation }: ConnectingScreenProps) {
  const unraid = useUnraid();
  const [showReset, setShowReset] = useState(false);
  const { red, orange } = Colors;

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowReset(true);
    }, SHOW_RESET_DELAY);

    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    // More logic will be added to this later (checking for valid creds and so on)
    if (unraid.hasCredentials) {
      if (unraid.isConnected) {
        log.debug('Navigating to Main as unraid has creds and is connected.');
        navigation.navigate('Main');
      }
    } else if (unraid.hasCheckedForCredentials) {
      log.debug('Navigating to Login');
      navigation.navigate('Login');
    }
  }, [unraid.hasCredentials, unraid.hasCheckedForCredentials, unraid.isConnected]);

  return (
    <S.Background colors={[red, orange]} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }}>
      <S.LoadingIcon source={LoadingLetter} autoPlay loop />
      <S.Status>
        {!showReset && unraid.hasCredentials && (
          <Typography variant={TypographyVariants.Paragraph}>
            Connecting to {unraid.credentials?.username}@{unraid.credentials?.host}:{unraid.credentials?.port}
          </Typography>
        )}
        {showReset && (
          <>
            <Typography variant={TypographyVariants.Paragraph}>This takes longer than it should.</Typography>
            <S.ResetButton onPress={unraid.clearCredentials}>Reset Crendentials.</S.ResetButton>
          </>
        )}
      </S.Status>
    </S.Background>
  );
}

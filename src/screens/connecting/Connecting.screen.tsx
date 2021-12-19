import React, { useEffect, useState } from 'react';
import { Typography, TypographyVariants } from '@atoms/Typography/Typography';
import { Colors } from '@styles/Colors';
import * as LoadingLetter from '../../assets/Letter.json';
import { useUnraid } from '../../contexts/Unraid.context';
import * as S from './Connecting.styled';

const SHOW_RESET_DELAY = 5000;

export function ConnectingScreen() {
  const unraid = useUnraid();
  const [showReset, setShowReset] = useState(false);
  const { red, orange } = Colors;

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowReset(true);
    }, SHOW_RESET_DELAY);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <S.Background colors={[red, orange]} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }}>
      <S.LoadingIcon source={LoadingLetter} autoPlay loop />
      <S.Status>
        {!showReset && (
          <Typography variant={TypographyVariants.Paragraph}>
            Connecting to {unraid.credentials?.username}@{unraid.credentials?.host}:{unraid.credentials?.port}
          </Typography>
        )}
        {showReset && <Typography variant={TypographyVariants.Paragraph}>This takes longer than it should.</Typography>}
        {showReset && <S.ResetButton onPress={unraid.clearCredentials}>Reset Crendentials.</S.ResetButton>}
      </S.Status>
    </S.Background>
  );
}

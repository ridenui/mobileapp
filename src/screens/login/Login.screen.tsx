import React from 'react';
import { SafeAreaView } from 'react-native';
import * as S from './Login.styled';
import { GradientHeader } from '@atoms/GradientHeader/GradientHeader';
import { Input } from '@atoms/Input/Input';
import { Typography, TypographyVariants } from '@atoms/Typography/Typography';
import { Button } from '@atoms/Button/Button';
import { openLink } from '@helpers/Linker';

export function LoginScreen() {
  return (
    <S.Container>
      <GradientHeader />
      <S.SafeAreaContainer>
        <S.Box>
          <Typography variant={TypographyVariants.H1}>Hey!</Typography>
          <Typography variant={TypographyVariants.Paragraph}>
            Please set up your server below
          </Typography>
          <S.Form>
            <S.HostnamePortContainer>
              <S.HostnameInput>Hostname</S.HostnameInput>
              <Input>Port</Input>
            </S.HostnamePortContainer>
            <Input>Username</Input>
            <Input>Password</Input>
            <Button>Connect</Button>
          </S.Form>
        </S.Box>
        <S.Footer onPress={() => openLink('https://github.com/ridenui')}>
          <Typography variant={TypographyVariants.Overline}>
            RIDEN UI
          </Typography>
        </S.Footer>
      </S.SafeAreaContainer>
    </S.Container>
  );
}

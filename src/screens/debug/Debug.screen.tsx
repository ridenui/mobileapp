import React, { useState } from 'react';
import * as S from '../login/Login.styled';
import { Typography, TypographyVariants } from '@atoms/Typography/Typography';
import { GradientHeader } from '@atoms/GradientHeader/GradientHeader';
import { openLink } from '@helpers/Linker';
import { SSHConfig, SSHExecutor, Unraid } from '@ridenui/unraid';
// @ts-ignore
import { SSH_HOST, SSH_USER, SSH_PASSWORD, SSH_PORT } from '@env';

export function DebugScreen() {
  const [text, setText] = useState('lol');

  const unraid = new Unraid({
    executor: SSHExecutor,
    executorConfig: {
      username: SSH_USER,
      host: SSH_HOST,
      password: SSH_PASSWORD,
      port: parseInt(SSH_PORT ?? '22', 10),
    } as SSHConfig,
  });

  unraid.system
    .date(true)
    .then(remoteDate => {
      setText(remoteDate.toString());
    })
    .catch(e => {
      console.error(e);
      setText('Error');
    });

  return (
    <S.Container>
      <GradientHeader />
      <S.SafeAreaContainer>
        <S.Box>
          <Typography variant={TypographyVariants.H1}>Debug Screen!</Typography>
          <Typography variant={TypographyVariants.Paragraph}>{text}</Typography>
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

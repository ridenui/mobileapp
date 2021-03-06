/* eslint-disable */
import React, { useEffect, useState } from 'react';
import { Text } from 'react-native';
import { Typography, TypographyVariants } from '@atoms/Typography/Typography';
import { useUnraid } from '../../contexts/Unraid.context';
import * as S from './Debug.styled';
import {writeMultipleToStorage} from "@helpers/Storage";

export function DebugScreen() {
  const [debugOutput, setDebugOutput] = useState<string[]>([]);

  const { instance } = useUnraid();

  useEffect(() => {
    if (instance) {
      instance.unraid
        .getIdentConfig()
        .then((output) => {
          setDebugOutput(Object.keys(output).map((v) => `${v}: ${output[v]}`));
        })
        .catch(() => {
          alert('there was an error.');
        });
    }
  }, [instance]);

  return (
    <S.Container>
      <Text>Debug</Text>
      <Typography variant={TypographyVariants.Paragraph}>Diskfree</Typography>
      {debugOutput.length === 0 && <Typography variant={TypographyVariants.Paragraph}>Fetching Data...</Typography>}
      {debugOutput.map((df, key) => {
        return (
          <Typography key={key} variant={TypographyVariants.Paragraph}>
            {df}
          </Typography>
        );
      })}
    </S.Container>
  );
}

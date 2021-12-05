import React, { useEffect, useState } from 'react';
import { SafeAreaView, Text } from 'react-native';
import { Typography, TypographyVariants } from '@atoms/Typography/Typography';
import { useUnraid } from '../../contexts/Unraid.context';

export function DebugScreen() {
  const [debugOutput, setDebugOutput] = useState<string[]>([]);

  const { instance } = useUnraid();

  useEffect(() => {
    if (instance) {
      instance.unraid
        .getIdentConfig()
        .then(output => {
          setDebugOutput(Object.keys(output).map(v => `${v}: ${output[v]}`));
        })
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        .catch(e => {
          alert('there was an error.');
        });
    }
  }, [instance]);

  return (
    <SafeAreaView>
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
    </SafeAreaView>
  );
}

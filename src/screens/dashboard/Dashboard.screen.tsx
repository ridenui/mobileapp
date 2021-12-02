import React, { useEffect, useState } from 'react';
import { SafeAreaView, Text } from 'react-native';
import { Typography, TypographyVariants } from '@atoms/Typography/Typography';
import { useUnraid } from '../../contexts/Unraid.context';
import { IDiskFreeReturn } from '@ridenui/unraid/dist/modules/system/extensions';

export function DashboardScreen() {
  const [diskFree, setDiskFree] = useState<IDiskFreeReturn[]>([]);

  const { instance } = useUnraid();

  useEffect(() => {
    if (instance) {
      instance.system
        .diskfree()
        .then(setDiskFree)
        .catch(() => {
          alert('there was an error.');
        });
    }
  }, [instance]);

  return (
    <SafeAreaView>
      <Text>Dashy McDashboard</Text>
      <Typography variant={TypographyVariants.Paragraph}>Diskfree</Typography>
      {diskFree.length === 0 && <Typography variant={TypographyVariants.Paragraph}>Fetching Data...</Typography>}
      {diskFree.map(df => {
        return (
          <Typography key={df.mounted} variant={TypographyVariants.Paragraph}>
            {df.mounted} - {df.used.toString(10)}/{df.available.toString(10)}
          </Typography>
        );
      })}
    </SafeAreaView>
  );
}

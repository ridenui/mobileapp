import React from 'react';
import { SafeAreaView, Text } from 'react-native';
import { useUnraid } from '../../contexts/Unraid.context';
import { Button } from '@atoms/Button/Button';

export function ConnectingScreen() {
  const unraid = useUnraid();
  return (
    <SafeAreaView>
      <Text>
        Connecting to {unraid.credentials?.username}@{unraid.credentials?.host}:{unraid.credentials?.port}
      </Text>
      <Button onPress={unraid.clearCredentials}>Reset Crendentials.</Button>
    </SafeAreaView>
  );
}

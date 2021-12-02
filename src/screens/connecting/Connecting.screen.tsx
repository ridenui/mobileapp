import React from 'react';
import { SafeAreaView, Text } from 'react-native';
import { useUnraid } from '../../contexts/Unraid.context';

export function ConnectingScreen() {
  const unraid = useUnraid();
  return (
    <SafeAreaView>
      <Text>
        Connecting to {unraid.credentials?.username}@{unraid.credentials?.host}:{unraid.credentials?.port}
      </Text>
    </SafeAreaView>
  );
}

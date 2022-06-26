import React from 'react';
import { useWindowDimensions, View } from 'react-native';
import { Typography, TypographyVariants } from '@atoms/Typography/Typography';
import type { ValidValidatedInstance } from '../../../screens/login/AutoDiscover';
import * as S from './AutoDiscoverCard.styled';

export interface AutoDiscoverCardProps {
  /** Description of children. */
  device: ValidValidatedInstance;
  /** onPress Handler */
  onPress: (device: ValidValidatedInstance) => void;
}

/**
 * Description of AutoDiscoverCard.
 */
export function AutoDiscoverCard({ device, onPress }: AutoDiscoverCardProps): JSX.Element {
  const { width } = useWindowDimensions();

  return (
    <S.AutoDiscoverCard onPress={() => onPress(device)} width={width}>
      <View>
        <Typography variant={TypographyVariants.H3}>{device.name}</Typography>
        {device.description ? (
          <Typography variant={TypographyVariants.Paragraph}>{device.description}</Typography>
        ) : null}
        <S.HostnameText variant={TypographyVariants.Paragraph}>Found at {device.ssh.hostname}</S.HostnameText>
      </View>
      <View />
    </S.AutoDiscoverCard>
  );
}

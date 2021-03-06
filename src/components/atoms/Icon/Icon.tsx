import React from 'react';
import { View } from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import { Typography, TypographyVariants } from '@atoms/Typography/Typography';
import { useTheme } from 'styled-components/native';
import * as S from './Icon.styled';

export interface IconProps {
  name: string;
  badge?: number;
  size?: number;
  color?: string;
}

export function Icon({ badge, name, color, size }: IconProps): JSX.Element {
  const theme = useTheme();

  if (!badge) {
    return <FeatherIcon name={name} color={color || theme[200]} size={size} />;
  }

  return (
    <View>
      <S.Badge>
        <Typography variant={TypographyVariants.Small}>{badge}</Typography>
      </S.Badge>
      <FeatherIcon name={name} color={color} size={size} />
    </View>
  );
}

import React from 'react';
import { View } from 'react-native';
import { Icon } from '@atoms/Icon/Icon';
import { TypographyVariants } from '@atoms/Typography/Typography';
import { useTheme } from 'styled-components';
import * as S from './FeatureNotInstalled.styled';

export interface FeatureNotInstalledProps {
  featureName: string;
  installationDescription: string;
}

export function FeatureNotInstalled({ featureName, installationDescription }: FeatureNotInstalledProps): JSX.Element {
  const theme = useTheme();

  return (
    <S.FeatureNotInstalled>
      <Icon name={'help-circle'} size={150} color={theme[700]} />
      <View>
        <S.Text variant={TypographyVariants.H3}>You don't have {featureName} installed.</S.Text>
        <S.Text variant={TypographyVariants.Paragraph}>{installationDescription}</S.Text>
      </View>
    </S.FeatureNotInstalled>
  );
}

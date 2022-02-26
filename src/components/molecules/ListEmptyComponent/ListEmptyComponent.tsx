import React from 'react';
import { View } from 'react-native';
import { Icon } from '@atoms/Icon/Icon';
import { TypographyVariants } from '@atoms/Typography/Typography';
import { useTheme } from 'styled-components';
import * as S from './ListEmptyComponent.styled';

/**
 * Generic component we can use when there are no items in a list
 */
export function ListEmptyComponent(): JSX.Element {
  const theme = useTheme();

  return (
    <S.ListEmptyComponent>
      <Icon name={'check'} size={200} color={theme[700]} />
      <View>
        <S.Text variant={TypographyVariants.H3}>Nothing here.</S.Text>
        <S.Text variant={TypographyVariants.Paragraph}>Expected something? Pull to refresh!</S.Text>
      </View>
    </S.ListEmptyComponent>
  );
}

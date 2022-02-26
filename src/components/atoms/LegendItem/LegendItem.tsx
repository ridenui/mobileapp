import React from 'react';
import { Typography, TypographyVariants } from '@atoms/Typography/Typography';
import * as S from './LegendItem.styled';

export interface LegendItemProps {
  children: string;
  color: string;
}

export function LegendItem({ children, color }: LegendItemProps): JSX.Element {
  return (
    <S.LegendItem>
      <S.ColorIndicator color={color} />
      <Typography variant={TypographyVariants.Mono}>{children}</Typography>
    </S.LegendItem>
  );
}

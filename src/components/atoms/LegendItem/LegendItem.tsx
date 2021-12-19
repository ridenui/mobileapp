import React from 'react';
import * as S from './LegendItem.styled';
import { Typography, TypographyVariants } from '@atoms/Typography/Typography';

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

import React from 'react';
import * as S from './HorizontalDivider.styled';

export interface HorizontalDividerProps {
  width?: number | string;
}

export function HorizontalDivider({ width = '100%' }: HorizontalDividerProps): JSX.Element {
  return <S.HorizontalDivider width={width} />;
}

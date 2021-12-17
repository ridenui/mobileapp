import React from 'react';
import { Colors } from '@styles/Colors';
import * as S from './GradientHeader.styled';

/**
 * Colored Gradient from red-to-orange
 */
export function GradientHeader(): JSX.Element {
  const { red, orange } = Colors;
  return <S.GradientHeader colors={[red, orange]} start={{ x: 0, y: 0.5 }} end={{ x: 1, y: 0.5 }} />;
}

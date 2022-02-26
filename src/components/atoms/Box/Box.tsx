import React from 'react';
import type { StyleProp, ViewProps } from 'react-native';
import { Typography, TypographyVariants } from '@atoms/Typography/Typography';
import * as S from './Box.styled';

export interface BoxProps {
  /** The content */
  children: React.ReactNode;
  /** A custom header */
  header?: string;
  style?: StyleProp<ViewProps>;
}

/**
 * A simple box. It's very simple. Trust me.
 */
export function Box({ children, header, style }: BoxProps): JSX.Element {
  return (
    <S.Box style={style}>
      {!!header && <Typography variant={TypographyVariants.H3}>{header}</Typography>}
      {children}
    </S.Box>
  );
}

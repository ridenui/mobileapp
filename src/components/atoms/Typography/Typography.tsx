import React from 'react';
import * as S from './Typography.styled';
import { TextProps } from 'react-native';
import { StyledProps } from 'styled-components';

export enum TypographyVariants {
  H1 = 'H1',
  H3 = 'H3',
  H4 = 'H4',
  Paragraph = 'Paragraph',
  Overline = 'Overline',
}

export interface TypographyProps {
  /** Typography Content. */
  children: TextProps['children'];
  /** Typography Type */
  variant: TypographyVariants;
  style?: StyledProps<TextProps>;
}

/**
 * Description of Typography.
 */
export function Typography({ children, variant, style }: TypographyProps): JSX.Element {
  const Tag = S[variant];
  return <Tag style={style}>{children}</Tag>;
}

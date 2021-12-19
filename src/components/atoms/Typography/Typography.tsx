import React from 'react';
import type { TextProps } from 'react-native';
import type { StyledProps } from 'styled-components';
import * as S from './Typography.styled';

export enum TypographyVariants {
  H1 = 'H1',
  H3 = 'H3',
  H4 = 'H4',
  H5 = 'H5',
  Paragraph = 'Paragraph',
  Small = 'Small',
  Mono = 'Mono',
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

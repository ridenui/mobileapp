import React from 'react';
import * as S from './Typography.styled';

export enum TypographyVariants {
  H1 = 'H1',
  H3 = 'H3',
  Paragraph = 'Paragraph',
  Overline = 'Overline',
}

export interface TypographyProps {
  /** Typography Content. */
  children: string | string[];
  /** Typography Type */
  variant: TypographyVariants;
  style?: string;
}

/**
 * Description of Typography.
 */
export function Typography({ children, variant, style }: TypographyProps): JSX.Element {
  const Tag = S[variant];
  return <Tag style={style}>{children}</Tag>;
}

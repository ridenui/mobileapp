import React from 'react';
import * as S from './Typography.styled';

export enum TypographyVariants {
  H1 = 'H1',
  Paragraph = 'Paragraph',
  Overline = 'Overline',
}

export interface TypographyProps {
  /** Typography Content. */
  children: string;
  /** Typography Type */
  variant: TypographyVariants;
}

/**
 * Description of Typography.
 */
export function Typography({
  children,
  variant,
}: TypographyProps): JSX.Element {
  const Tag = S[variant];
  return <Tag>{children}</Tag>;
}

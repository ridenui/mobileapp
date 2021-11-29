import React from 'react';
import * as S from './Button.styled';
import { Typography, TypographyVariants } from '@atoms/Typography/Typography';

export interface ButtonProps {
  /** Description of children. */
  children: string;
}

/**
 * Description of Button.
 */
export function Button({ children }: ButtonProps): JSX.Element {
  return (
    <S.Button>
      <Typography variant={TypographyVariants.Paragraph}>{children}</Typography>
    </S.Button>
  );
}

import React from 'react';
import * as S from './Input.styled';
import { useTheme } from 'styled-components';

export interface InputProps {
  /** Placeholder text */
  children: string;
}

/**
 * A very basic Text Input
 */
export function Input({ children, ...props }: InputProps): JSX.Element {
  const theme = useTheme();
  return (
    <S.Input selectionColor={theme.text} placeholder={children} {...props} />
  );
}

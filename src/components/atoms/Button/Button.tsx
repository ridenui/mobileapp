import React from 'react';
import * as S from './Button.styled';
import { Typography, TypographyVariants } from '@atoms/Typography/Typography';
import { TouchableOpacityProps } from 'react-native';

export interface ButtonProps {
  /** Text Content of the Button. */
  children: string;
  /** onPress Handler */
  onPress?: TouchableOpacityProps['onPress'];
  /** Set button disabled state */
  disabled?: TouchableOpacityProps['disabled'];
}

/**
 * It's a Button.
 */
export function Button({ children, onPress, disabled }: ButtonProps): JSX.Element {
  return (
    <S.Button onPress={onPress} disabled={disabled}>
      <Typography variant={TypographyVariants.Paragraph}>{children}</Typography>
    </S.Button>
  );
}

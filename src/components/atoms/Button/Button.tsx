import React from 'react';
import type { TouchableOpacityProps, ViewStyle } from 'react-native';
import { Typography, TypographyVariants } from '@atoms/Typography/Typography';
import type { StyledProps } from 'styled-components';
import * as S from './Button.styled';

export enum ButtonVariants {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  FLAT = 'flat',
}

export interface ButtonProps {
  /** Text Content of the Button. */
  children: string;
  /** onPress Handler */
  onPress?: TouchableOpacityProps['onPress'];
  /** Set button disabled state */
  disabled?: TouchableOpacityProps['disabled'];
  /** custom styles */
  style?: StyledProps<ViewStyle>;
  variant?: ButtonVariants;
  textStyle?: TypographyVariants;
}

/**
 * It's a Button.
 */
export function Button({
  children,
  onPress,
  disabled,
  style,
  variant = ButtonVariants.PRIMARY,
  textStyle = TypographyVariants.Paragraph,
}: ButtonProps): JSX.Element {
  return (
    <S.Button onPress={onPress} disabled={!!disabled} style={style} variant={variant}>
      <Typography variant={textStyle}>{children}</Typography>
    </S.Button>
  );
}

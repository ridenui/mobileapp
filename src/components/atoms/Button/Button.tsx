import React from 'react';
import * as S from './Button.styled';
import { Typography, TypographyVariants } from '@atoms/Typography/Typography';
import { TouchableOpacityProps, ViewStyle } from 'react-native';
import { StyledProps } from 'styled-components';

export interface ButtonProps {
  /** Text Content of the Button. */
  children: string;
  /** onPress Handler */
  onPress?: TouchableOpacityProps['onPress'];
  /** Set button disabled state */
  disabled?: TouchableOpacityProps['disabled'];
  /** custom styles */
  style?: StyledProps<ViewStyle>;
}

/**
 * It's a Button.
 */
export function Button({ children, onPress, disabled, style }: ButtonProps): JSX.Element {
  return (
    <S.Button onPress={onPress} disabled={disabled} style={style}>
      <Typography variant={TypographyVariants.Paragraph}>{children}</Typography>
    </S.Button>
  );
}

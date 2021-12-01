import React from 'react';
import * as S from './Button.styled';
import { Typography, TypographyVariants } from '@atoms/Typography/Typography';
import { TouchableOpacityProps } from 'react-native';

export interface ButtonProps {
  /** Text Content of the Button. */
  children: string;
  /** onPress Handler */
  onPress?: TouchableOpacityProps['onPress'];
}

/**
 * Description of Button.
 */
export function Button({ children, onPress }: ButtonProps): JSX.Element {
  return (
    <S.Button onPress={onPress}>
      <Typography variant={TypographyVariants.Paragraph}>{children}</Typography>
    </S.Button>
  );
}

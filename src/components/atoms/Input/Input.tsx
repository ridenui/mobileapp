import React from 'react';
import * as S from './Input.styled';
import { useTheme } from 'styled-components';
import { StyleProp, TextInputProps, TextStyle } from 'react-native';

export interface InputProps {
  /** Placeholder text */
  children: string;
  /** On Change Text Listener */
  onChangeText: TextInputProps['onChangeText'];
  /** Keyboard Type */
  keyboardType?: TextInputProps['keyboardType'];
  /** Toggle Secure Input */
  isSecure?: boolean;
  /** Custom Style */
  style?: StyleProp<TextStyle>;
  /** Sets Capitalization Method */
  autoCapitalize?: TextInputProps['autoCapitalize'];
  /** Input Value */
  value: TextInputProps['value'];
  /** maxLength of Text */
  maxLength?: TextInputProps['maxLength'];
}

/**
 * A very basic Text Input
 */
export function Input({
  children,
  onChangeText,
  keyboardType,
  isSecure,
  style,
  autoCapitalize,
  value,
  maxLength,
}: InputProps): JSX.Element {
  const theme = useTheme();
  return (
    <S.Input
      selectionColor={theme.text}
      placeholder={children}
      onChangeText={onChangeText}
      keyboardType={keyboardType}
      secureTextEntry={isSecure}
      style={style}
      autoCapitalize={autoCapitalize}
      value={value}
      maxLength={maxLength}
    />
  );
}

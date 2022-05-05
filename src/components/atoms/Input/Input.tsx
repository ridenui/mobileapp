import React from 'react';
import type { StyleProp, TextInputProps, TextStyle } from 'react-native';
import { useTheme } from 'styled-components';
import * as S from './Input.styled';

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
  /** Enable AutoCorrect */
  autoCorrect?: TextInputProps['autoCorrect'];
  /** Input Value */
  value: TextInputProps['value'];
  /** maxLength of Text */
  maxLength?: TextInputProps['maxLength'];
  /** Toggle red border (invalid state) */
  isInvalid?: boolean;
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
  isInvalid,
}: InputProps): JSX.Element {
  const theme = useTheme();

  return (
    <S.Input
      selectionColor={theme.text}
      placeholder={children}
      placeholderTextColor={theme['300']}
      onChangeText={onChangeText}
      keyboardType={keyboardType}
      secureTextEntry={isSecure}
      style={style}
      autoCapitalize={autoCapitalize}
      value={value}
      maxLength={maxLength}
      isInvalid={isInvalid}
    />
  );
}

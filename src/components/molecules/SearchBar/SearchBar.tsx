import React from 'react';
import type { TextInputProps } from 'react-native';
import { useTheme } from 'styled-components/native';
import * as S from './SearchBar.styled';

export interface SearchBarProps {
  value: TextInputProps['value'];
  onChangeText: TextInputProps['onChangeText'];
  placeholder: TextInputProps['placeholder'];
}

export function SearchBar({ value, onChangeText, placeholder }: SearchBarProps): JSX.Element {
  const theme = useTheme();

  return (
    <S.SearchBar>
      <S.Input
        placeholder={placeholder}
        value={value}
        placeholderTextColor={theme['100']}
        onChangeText={onChangeText}
      />
    </S.SearchBar>
  );
}

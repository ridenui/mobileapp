import { Colors } from '@styles/Colors';
import styled from 'styled-components/native';

type InputStyledProps = {
  isInvalid?: boolean;
};

export const Input = styled.TextInput<InputStyledProps>`
  border: 1px solid ${({ theme, isInvalid }) => (isInvalid ? Colors.red : theme['300'])};
  border-radius: 16px;
  color: ${({ theme }) => theme.text};
  height: 40px;
  padding: 4px 16px;
  font-size: 16px;
`;

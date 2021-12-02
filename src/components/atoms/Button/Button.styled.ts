import styled from 'styled-components/native';
import { Colors } from '@styles/Colors';

export const Button = styled.TouchableOpacity`
  height: 32px;
  border-radius: 16px;
  justify-content: center;
  align-items: center;
  background: ${({ theme, disabled }) => (disabled ? theme['400'] : Colors.red)};
`;

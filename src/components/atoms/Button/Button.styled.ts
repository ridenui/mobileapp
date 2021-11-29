import styled from 'styled-components/native';

export const Button = styled.TouchableOpacity`
  height: 32px;
  border-radius: 16px;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme['400']};
`;

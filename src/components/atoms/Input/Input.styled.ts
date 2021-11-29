import styled from 'styled-components/native';

export const Input = styled.TextInput`
  border: 1px solid ${({ theme }) => theme['300']};
  border-radius: 16px;
  color: ${({ theme }) => theme.text};
  height: 40px;
  padding: 4px 16px;
  font-size: 16px;
`;

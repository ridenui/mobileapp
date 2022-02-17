import styled from 'styled-components/native';

export const SearchBar = styled.View`
  background: ${({ theme }) => theme['700']};
`;

export const Input = styled.TextInput`
  height: 32px;
  background: ${({ theme }) => theme['400']};
  color: white;
  margin: 8px 16px;
  border-radius: 8px;
  padding: 0 8px;
`;

import styled from 'styled-components/native';

export const Box = styled.View`
  width: 95%;
  margin: 2.5%;
  padding: 8px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme['500']};
`;

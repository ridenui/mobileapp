import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  background: ${({ theme }) => theme['600']};
  flex: 1;
  flex-direction: column;
`;

import styled from 'styled-components/native';
import { Box } from '@atoms/Box/Box';
import { Icon } from '@atoms/Icon/Icon';

export const Container = styled.SafeAreaView`
  background: ${({ theme }) => theme['600']};
  flex: 1;
  flex-direction: column;
`;

export const ServerInfoBox = styled(Box)`
  display: flex;
  flex-direction: row;
`;

export const ServerCaseIcon = styled(Icon)`
  color: ${({ theme }) => theme.text};
`;

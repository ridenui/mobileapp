import { Box } from '@atoms/Box/Box';
import { CaseIcon } from '@atoms/CaseIcon/CaseIcon';
import styled from 'styled-components/native';

export const Container = styled.View`
  background: ${({ theme }) => theme['600']};
  flex: 1;
  flex-direction: column;
`;

export const ServerInfoBox = styled(Box)`
  display: flex;
  flex-direction: row;
`;

export const ServerInfoText = styled.View`
  flex: 2;
`;

export const ServerCaseIcon = styled(CaseIcon)`
  color: ${({ theme }) => theme.text};
`;

import { Typography } from '@atoms/Typography/Typography';
import styled from 'styled-components/native';

type AutoDiscoverCardStyled = {
  width: number;
};

export const AutoDiscoverCard = styled.TouchableOpacity<AutoDiscoverCardStyled>`
  border-radius: 8px;
  padding: 16px;
  background: ${({ theme }) => theme['500']};
  width: ${({ width }) => width * 0.95}px;
  margin: 0 ${({ width }) => width * 0.025}px;
`;

export const HostnameText = styled(Typography)`
  margin-top: 8px;
`;

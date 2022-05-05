import { Typography } from '@atoms/Typography/Typography';
import styled from 'styled-components/native';

export const FeatureNotInstalled = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Text = styled(Typography)`
  color: ${({ theme }) => theme['400']};
  text-align: center;
`;

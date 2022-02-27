import { Image } from 'react-native';
import { Box } from '@atoms/Box/Box';
import styled from 'styled-components/native';

export const ContainerCard = styled(Box)`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const ContainerIcon = styled(Image)`
  width: 48px;
  height: 48px;
  margin-right: 12px;
`;

export const Icon = styled.View`
  margin-left: auto;
`;

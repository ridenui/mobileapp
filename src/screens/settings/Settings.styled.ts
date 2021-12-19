import { Box } from '@atoms/Box/Box';
import { Button } from '@atoms/Button/Button';
import { Typography } from '@atoms/Typography/Typography';
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  background: ${({ theme }) => theme['600']};
  flex: 1;
  flex-direction: column;
`;

export const VersionInfo = styled.View`
  display: flex;
  width: 100%;
  align-items: center;
`;

export const SettingsBox = styled(Box)`
  display: flex;
`;

export const BoxHeader = styled(Typography)`
  margin-bottom: 8px;
`;

export const Actions = styled.View`
  display: flex;
  flex-direction: row;
  margin-top: 16px;
`;

export const ActionButton = styled(Button)`
  flex: 1;
  margin: 0 4px;
`;

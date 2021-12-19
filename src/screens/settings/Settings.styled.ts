import { Box } from '@atoms/Box/Box';
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

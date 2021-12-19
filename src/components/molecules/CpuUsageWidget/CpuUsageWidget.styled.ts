import { Box } from '@atoms/Box/Box';
import styled from 'styled-components/native';

export const CpuUsageWidget = styled(Box)``;

export const WidgetHeader = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
`;

export const Legend = styled.View`
  display: flex;
  padding: 4px 8px;
`;

export const LegendGroup = styled.View`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

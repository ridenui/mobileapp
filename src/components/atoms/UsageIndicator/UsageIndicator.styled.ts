import { Colors } from '@styles/Colors';
import * as chroma from 'chroma-js';
import styled from 'styled-components/native';

export const UsageIndicatorBackground = styled.View`
  width: 100%;
  height: 10px;
  background: ${({ theme }) => theme['400']};
  margin: 2px 0;
  border-radius: 4px;
`;

export type UsageIndicatorStyled = {
  usage: number;
};

const scale = chroma.scale([Colors.green, Colors.orange, Colors.red]);
const getUsageIndicatorColor = ({ usage }: UsageIndicatorStyled) => {
  return {
    background: scale(usage / 100).hex(),
  };
};

export const UsageIndicator = styled.View<UsageIndicatorStyled>`
  position: absolute;
  width: ${({ usage }) => usage}%;
  height: 10px;
  border-radius: 4px;
  ${getUsageIndicatorColor}
`;

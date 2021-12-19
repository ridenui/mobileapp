import { Colors } from '@styles/Colors';
import styled from 'styled-components/native';

export const UsageIndicatorBackground = styled.View`
  width: 100%;
  height: 10px;
  background: ${({ theme }) => theme['400']};
  margin: 2px 0px;
  border-radius: 4px;
`;

export type UsageIndicatorStyled = {
  usage: number;
};

const getUsageIndicatorColor = ({ usage }: UsageIndicatorStyled) => {
  if (usage <= 80) {
    return {
      background: Colors.green,
    };
  }
  if (usage <= 90) {
    return {
      background: Colors.orange,
    };
  }

  return {
    background: Colors.red,
  };
};

export const UsageIndicator = styled.View<UsageIndicatorStyled>`
  position: absolute;
  width: ${({ usage }) => usage}%;
  height: 10px;
  border-radius: 4px;
  ${getUsageIndicatorColor}
`;

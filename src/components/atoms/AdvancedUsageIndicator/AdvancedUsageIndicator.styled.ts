import { Animated } from 'react-native';
import styled from 'styled-components/native';

export const AdvancedUsageIndicator = styled.View`
  background: ${({ theme }) => theme['400']};
  height: 10px;
  margin: 2px 0;
  border-radius: 4px;
`;

export type IndicatorStyled = {
  isFirst: boolean;
  isLast: boolean;
  color: string;
};

const getBorderRadius = ({ isFirst, isLast }: IndicatorStyled) => {
  if (isFirst && isLast) {
    return {
      borderRadius: 20,
    };
  }
  if (isFirst) {
    return {
      borderTopLeftRadius: 20,
      borderBottomLeftRadius: 20,
    };
  }
  if (isLast) {
    return {
      borderTopRightRadius: 20,
      borderBottomRightRadius: 20,
    };
  }

  return {};
};

export const Indicator = styled(Animated.View)<IndicatorStyled>`
  background: ${({ color }) => color};
  height: 10px;
  ${getBorderRadius}
`;

export const IndicatorWrapper = styled.View`
  position: absolute;
  height: 10px;
  width: 100%;
  display: flex;
  flex-direction: row;
`;

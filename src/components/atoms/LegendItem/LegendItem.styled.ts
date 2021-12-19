import styled from 'styled-components/native';

export const LegendItem = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

type ColorIndicatorStyled = {
  color: string;
};

export const ColorIndicator = styled.View<ColorIndicatorStyled>`
  background: ${({ color }) => color};
  height: 12px;
  width: 12px;
  border-radius: 2px;
  margin-right: 4px;
`;

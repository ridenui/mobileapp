import styled from 'styled-components/native';

export type HorizontalDividerStyled = {
  width: number | string;
};

export const HorizontalDivider = styled.View<HorizontalDividerStyled>`
  width: ${({ width }) => width};
  height: 1px;
  background: ${({ theme }) => theme['500']};
`;

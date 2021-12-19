import { ButtonVariants } from '@atoms/Button/Button';
import { Colors } from '@styles/Colors';
import type { Theme } from '@styles/Themes';
import styled from 'styled-components/native';

export type ButtonStyled = {
  variant: ButtonVariants;
  disabled: boolean;
};

type withTheme = ButtonStyled & { theme: Theme };

const getBackgroundColor = ({ variant, theme, disabled }: withTheme) => {
  if (variant === ButtonVariants.PRIMARY) {
    return {
      background: disabled ? theme['400'] : Colors.red,
    };
  }
  if (variant === ButtonVariants.SECONDARY) {
    return {
      background: disabled ? theme['400'] : Colors.orange,
    };
  }

  return {};
};

export const Button = styled.TouchableOpacity<ButtonStyled>`
  height: 32px;
  border-radius: 16px;
  justify-content: center;
  align-items: center;
  ${getBackgroundColor}
`;

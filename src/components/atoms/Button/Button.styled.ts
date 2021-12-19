import { ButtonSizes, ButtonVariants } from '@atoms/Button/Button';
import { Colors } from '@styles/Colors';
import type { Theme } from '@styles/Themes';
import styled from 'styled-components/native';

export type ButtonStyled = {
  variant: ButtonVariants;
  disabled: boolean;
  size: ButtonSizes;
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

  if (variant === ButtonVariants.GREEN) {
    return {
      background: disabled ? theme['400'] : Colors.green,
    };
  }

  return {};
};

const getSize = ({ size }: ButtonStyled) => {
  if (size === ButtonSizes.LARGE) {
    return {
      height: '32px',
    };
  }
  if (size === ButtonSizes.SMALL) {
    return {
      height: '24px',
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
  ${getSize}
`;

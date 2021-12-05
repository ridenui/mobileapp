import React from 'react';
import Icons from '../../../assets/cases';
import type { SvgProps } from 'react-native-svg';
import { StyleProp, ViewProps } from 'react-native';

export interface IconProps {
  type: keyof typeof Icons;
  iconProps?: SvgProps;
  style?: StyleProp<ViewProps>;
}

export function Icon({ type, iconProps, style }: IconProps): JSX.Element | null {
  const IconSvg = Icons[type];
  if (!IconSvg) {
    return null;
  }

  return <IconSvg {...iconProps} style={style} />;
}

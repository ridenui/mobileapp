import React from 'react';
import type { StyleProp, ViewProps } from 'react-native';
import type { SvgProps } from 'react-native-svg';
import Icons from '../../../assets/cases';

export interface IconProps {
  type: keyof typeof Icons;
  iconProps?: SvgProps;
  style?: StyleProp<ViewProps>;
}

export function CaseIcon({ type, iconProps, style }: IconProps): JSX.Element | null {
  const IconSvg = Icons[type];
  if (!IconSvg) {
    return null;
  }

  return <IconSvg {...iconProps} style={style} />;
}

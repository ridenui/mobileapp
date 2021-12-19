import * as React from 'react';
import type { SvgProps } from 'react-native-svg';
import Svg, { Path } from 'react-native-svg';

const SvgMiniTower = (props: SvgProps) => (
  <Svg viewBox="-10 0 1034 1024" width={24} height={24} {...props}>
    <Path fill="currentColor" d="M688 864h-64v-16H400v16h-64v-16h-48V160h448v688h-48v16zm16-672H320v624h384V192z" />
  </Svg>
);

export default SvgMiniTower;

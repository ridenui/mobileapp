import * as React from 'react';
import type { SvgProps } from 'react-native-svg';
import Svg, { Path } from 'react-native-svg';

const SvgMidTower = (props: SvgProps) => (
  <Svg viewBox="-10 0 1034 1024" width={24} height={24} {...props}>
    <Path fill="currentColor" d="M704 952h-64v-16H384v16h-64v-16h-48V72h480v864h-48v16zm16-848H304v800h416V104z" />
  </Svg>
);

export default SvgMidTower;

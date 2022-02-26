import * as React from 'react';
import type { SvgProps } from 'react-native-svg';
import Svg, { Path } from 'react-native-svg';

const SvgFullTower = (props: SvgProps) => (
  <Svg viewBox="-10 0 1034 1024" width={24} height={24} {...props}>
    <Path
      fill="currentColor"
      d="M368 1008v16h-64v-16h64zm-112 0V0h512v1008h-48v16h-64v-16H256zM736 32H288v944h448V32z"
    />
  </Svg>
);

export default SvgFullTower;

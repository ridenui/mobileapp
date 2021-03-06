import * as React from 'react';
import type { SvgProps } from 'react-native-svg';
import Svg, { Path } from 'react-native-svg';

const SvgNinetennHundred = (props: SvgProps) => (
  <Svg viewBox="-10 0 1034 1024" width={24} height={24} {...props}>
    <Path
      fill="currentColor"
      d="m584 1008-16-16H456l-16 16h-64v16h-48v-16l-32-48V48l32-48h368l32 48v912l-32 48v16h-48v-16h-64zm95-976H345l-17 26v892l17 26h82l16-16h138l16 16h82l17-26V58zm-15 16 16 24v840l-16 32H360l-16-24V72l16-24h304zm-9 16H369l-9 13v838l9 13h285l10-20V77l-9-13z"
    />
  </Svg>
);

export default SvgNinetennHundred;

import * as React from 'react';
import type { SvgProps } from 'react-native-svg';
import Svg, { Path } from 'react-native-svg';

const SvgH500 = (props: SvgProps) => (
  <Svg viewBox="-10 0 1034 1024" width={24} height={24} {...props}>
    <Path
      fill="currentColor"
      d="M752 64v864h-16v32h-48v-32H336v32h-48v-32h-16V64h480zm-32 32H304v800h416V96zM576 736v8h-9v24h-10v-24h-8v-8h27zm-51 0 5 8 6-8h10l-11 16 11 16h-11l-5-8-6 8h-10l10-16-11-16h12zm-67 0 11 16v-16h9v32h-9l-11-17v17h-10v-32h10zm52 0-13 24h13v8h-27l12-24h-12v-8h27z"
    />
  </Svg>
);

export default SvgH500;

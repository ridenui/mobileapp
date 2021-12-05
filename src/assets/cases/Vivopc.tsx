import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const SvgVivopc = (props: SvgProps) => (
  <Svg viewBox="-10 0 1034 1024" width={24} height={24} {...props}>
    <Path
      fill="currentColor"
      d="m872 384 32 184-32 72H168l-48-72 32-184h720zM160 560h704l-20-120H664l-8 8H368l-8-8H180zm680-144H184l-3 16h662z"
    />
  </Svg>
);

export default SvgVivopc;

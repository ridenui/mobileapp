import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const SvgHtpc = (props: SvgProps) => (
  <Svg viewBox="-10 0 1034 1024" width={24} height={24} {...props}>
    <Path
      fill="currentColor"
      d="M896 664v16h-64v-16h64zm-704 0v16h-64v-16h64zm752-320v320H80V344h864zm-32 32H112v256h800V376z"
    />
  </Svg>
);

export default SvgHtpc;

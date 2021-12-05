import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const SvgSff = (props: SvgProps) => (
  <Svg viewBox="-10 0 1034 1024" width={24} height={24} {...props}>
    <Path fill="currentColor" d="M352 752h-64v-16h-48V272h544v464h-48v16h-64v-16H352v16zm400-448H272v400h480V304z" />
  </Svg>
);

export default SvgSff;

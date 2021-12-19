import * as React from 'react';
import type { SvgProps } from 'react-native-svg';
import Svg, { Path } from 'react-native-svg';

const SvgVm = (props: SvgProps) => (
  <Svg viewBox="-10 0 1034 1024" width={24} height={24} {...props}>
    <Path
      fill="currentColor"
      d="M336 792h352v32H336v-32zm272-144v176H416V648h192zm-32 32H448v112h128V680zm272-480v480H176V200h672zm-32 32H208v416h608V232zM408 368l36 107 35-107h23l-46 136h-26l-46-136h24zm137 0 37 71 36-71h22v136h-22v-91l-36 70-36-70v91h-22V368h21z"
    />
  </Svg>
);

export default SvgVm;

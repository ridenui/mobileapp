import * as React from 'react';
import type { SvgProps } from 'react-native-svg';
import Svg, { Path } from 'react-native-svg';

const Svg4UFans = (props: SvgProps) => (
  <Svg viewBox="-10 0 1044 1024" width={24} height={24} {...props}>
    <Path
      fill="currentColor"
      d="M80 432 256 96h528l160 336h80v496H0V432h80zm32 0h800L768 128H272zm-80 32v432h960V464H32zm16 32h16v368H48V496zm912 0h16v368h-16V496zM256 816q40 0 68-28t28-68-28-68-68-28-68 28-28 68 28 68 68 28zm0 16q-46 0-79-33t-33-79 33-79 79-33 79 33 33 79-33 79-79 33zm256-16q40 0 68-28t28-68-28-68-68-28-68 28-28 68 28 68 68 28zm0 16q-46 0-79-33t-33-79 33-79 79-33 79 33 33 79-33 79-79 33zm256-16q40 0 68-28t28-68-28-68-68-28-68 28-28 68 28 68 68 28zm0 16q-46 0-79-33t-33-79 33-79 79-33 79 33 33 79-33 79-79 33z"
    />
  </Svg>
);

export default Svg4UFans;

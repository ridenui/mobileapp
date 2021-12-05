import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const SvgRouter = (props: SvgProps) => (
  <Svg viewBox="-10 0 1034 1024" width={24} height={24} {...props}>
    <Path
      fill="currentColor"
      d="M792 568v176H232V568h560zm-32 32H264v112h496V600zm-336 48v24h-16v-24h16zm48 0v24h-16v-24h16zm96 0v24h-16v-24h16zm-48 0v24h-16v-24h16zm96 0v24h-16v-24h16zM312 280l8 272h-32l8-272h16zm416 0 8 272h-32l8-272h16z"
    />
  </Svg>
);

export default SvgRouter;

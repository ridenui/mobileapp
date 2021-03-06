import * as React from 'react';
import type { SvgProps } from 'react-native-svg';
import Svg, { Path } from 'react-native-svg';

const Svg1UDisks = (props: SvgProps) => (
  <Svg viewBox="-10 0 1044 1024" width={24} height={24} {...props}>
    <Path
      fill="currentColor"
      d="M0 592h1024v176H0V592zm32 32v112h960V624H32zm880-32L768 288H272L112 592H80l176-336h528l160 336h-32zm-176 48h192v80H528v-80h208zm0 16v48h176v-48H736zm-16 0H544v48h176v-48zm-416-16h192v80H96v-80h208zm0 16v48h176v-48H304zm-16 0H112v48h176v-48zm-240 0h16v48H48v-48zm912 0h16v48h-16v-48z"
    />
  </Svg>
);

export default Svg1UDisks;

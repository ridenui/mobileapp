import * as React from 'react';
import type { SvgProps } from 'react-native-svg';
import Svg, { Path } from 'react-native-svg';

const Svg3UDisks = (props: SvgProps) => (
  <Svg viewBox="-10 0 1044 1024" width={24} height={24} {...props}>
    <Path
      fill="currentColor"
      d="M0 496h1024v368H0V496zm32 32v304h960V528H32zm464 80v208H96V544h400v64zm-16 0v-48H304v48h176zm-192 0v-48H112v48h176zm0 16H112v48h176v-48zm192 0H304v48h176v-48zm448-16v208H528V544h400v64zm-16 0v-48H736v48h176zm-192 0v-48H544v48h176zm0 16H544v48h176v-48zm192 0H736v48h176v-48zm-432 64H304v48h176v-48zm-192 0H112v48h176v-48zm624 0H736v48h176v-48zm-192 0H544v48h176v-48zm-240 64H304v48h176v-48zm-192 0H112v48h176v-48zm624 0H736v48h176v-48zm-368 0v48h176v-48H544zm368-256L768 192H272L112 496H80l176-336h528l160 336h-32zm48 64h16v240h-16V560zm-912 0h16v240H48V560z"
    />
  </Svg>
);

export default Svg3UDisks;

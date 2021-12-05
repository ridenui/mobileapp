import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const Svg2UDisks = (props: SvgProps) => (
  <Svg viewBox="-10 0 1044 1024" width={24} height={24} {...props}>
    <Path
      fill="currentColor"
      d="M480 656H304v48h176v-48zM96 640v-64h400v208H96V640zm16 0h176v-48H112v48zm192 0h176v-48H304v48zm-16 16H112v48h176v-48zm624 0H736v48h176v-48zm-384-16v-64h400v208H528V640zm16 0h176v-48H544v48zm192 0h176v-48H736v48zm-16 16H544v48h176v-48zm-240 64H304v48h176v-48zm-192 0H112v48h176v-48zm624 0H736v48h176v-48zm-368 0v48h176v-48H544zM80 528l176-336h528l160 336h80v304H0V528h80zm32 0h800L768 224H272zm-80 32v240h960V560H32zm928 32h16v176h-16V592zm-912 0h16v176H48V592z"
    />
  </Svg>
);

export default Svg2UDisks;

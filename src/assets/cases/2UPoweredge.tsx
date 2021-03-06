import * as React from 'react';
import type { SvgProps } from 'react-native-svg';
import Svg, { Path } from 'react-native-svg';

const Svg2UPoweredge = (props: SvgProps) => (
  <Svg viewBox="-10 0 1044 1024" width={24} height={24} {...props}>
    <Path
      fill="currentColor"
      d="M102 560H32v240h70l114-64h592l114 64h70V560h-70l-114 64H216zm58 0 4 8 60 32h576l60-32 2-8H160zm745 240h-43l-2-8-60-32H224l-60 32-4 8h745zM80 528l176-336h528l160 336h80v304H0V528h80zm32 0h800L768 224H272zm824 32h8v240h-8V560zm-856 0h8v240h-8V560zm790 0-3 13-65 35H222l-64-34-7-14h-32l99 56h588l99-56h-35zm0 240h35l-99-56H218l-99 56h32l7-14 64-34h580l65 35 3 13zm-358-88q-13 0-22.5-9.5T480 680t9.5-22.5T512 648t22.5 9.5T544 680t-9.5 22.5T512 712zm-11-34q-1-2-3-3.5t-4-1.5h-6v14h6q2 0 4-1.5t3-3.5l8 6 8-6v5h9v-3h-6v-11h-4v5l-7 6-2-1 4-3 4-3-2-2-8 6-2-1 8-6-2-2-8 6zm-7-2h1l.5.5.5.5q1 0 1 .5v5l-1 .5-.5.5-.5.5h-4v-8h3zm42 11v-3h-6v-11h-3v14h9z"
    />
  </Svg>
);

export default Svg2UPoweredge;

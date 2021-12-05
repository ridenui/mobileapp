import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const SvgMercuryS8 = (props: SvgProps) => (
  <Svg viewBox="-10 0 1034 1024" width={24} height={24} {...props}>
    <Path
      fill="currentColor"
      d="M832 104v832h-48v24h-64v-24H304v24h-64v-24h-48V104h640zm-32 32H224v768h576V136zM661 856v1l4 5v1.5l-1 .5h-5l-1-1v1h-7q-1 0-2-.5t-1-1.5v-3q0-1 .5-2t1.5-1h6v2h-6v4h6l4-5v-1h1zm47 0q1 0 1.5.5t.5 1.5v4l-.5 1.5-1.5.5h-7v-8h7zm-22 0v6h6l3-5v-1h1l1 1 3 6h1l-.5.5-.5.5h-6l-1-1v1h-7q-1 0-1.5-.5t-.5-1.5v-6h2zm-2 0v2h-7v1h7v2h-7v1h7v2h-8.5l-.5-1v-6.5l1-.5h8zm-10 0v2h-6.5l-.5 1h5q1 0 2 1t1 2l-.5 1-1.5 1h-7v-2h7v-1h-5q-1 0-2-.5t-1-1.5.5-2 1.5-1h7zm46 0v2h-7v1h5q1 0 1.5 1t.5 2l-.5 1-1.5 1h-7v-2h7v-1h-5q-1 0-1.5-.5t-.5-1.5.5-2 1.5-1h7zm16-640v608H544V216h192zM472 648v176h-88V648h88zm256-360H552v528h176V400H552v-8h176V288zM464 656h-72v160h72V656zm-52 88q5 0 8.5 3.5t3.5 8.5-3.5 8.5-8.5 3.5-8.5-3.5-3.5-8.5 3.5-8.5 8.5-3.5zm0-40q5 0 8.5 3.5t3.5 8.5-3.5 8.5-8.5 3.5-8.5-3.5-3.5-8.5 3.5-8.5 8.5-3.5zm76-488v368H296V216h192zm-8 8H304v352h176V224zm248 0H552v56h176v-56zM832 56v40H192V56h640z"
    />
  </Svg>
);

export default SvgMercuryS8;

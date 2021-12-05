import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const SvgV350 = (props: SvgProps) => (
  <Svg viewBox="-10 0 1034 1024" width={24} height={24} {...props}>
    <Path
      fill="currentColor"
      d="M784 272v464h-48v16h-64v-16H352v16h-64v-16h-48V272h544zm-160 32H272v400h352V304zm128 0H632v400h120V304zm-48 352q3 0 5.5 2.5t2.5 5.5-2.5 5.5-5.5 2.5-5.5-2.5-2.5-5.5 2.5-5.5 5.5-2.5zm0-40q7 0 11.5 4.5T720 632t-4.5 11.5T704 648t-11.5-4.5T688 632t4.5-11.5T704 616zM376 328v16h-3v-16h3zm-14 0v13h9v3h-13v-16h4zm-25 0 8 11v-11h3v16h-3l-8-10v10h-3v-16h3zm-11 0 7 16h-4l-2-4h-7l-1 4h-4l7-16h4zm-12 0v16h-4v-16h4zm-15 0v13h9v3h-12v-16h3zm25 4-2 6h4l-2-6z"
    />
  </Svg>
);

export default SvgV350;

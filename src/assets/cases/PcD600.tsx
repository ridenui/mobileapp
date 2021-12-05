import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const SvgPcD600 = (props: SvgProps) => (
  <Svg viewBox="-10 0 1034 1024" width={24} height={24} {...props}>
    <Path
      fill="currentColor"
      d="M832 88v840h-32v16h-72v-16H296v16h-72v-16h-32V88h640zm-32 32H224v776h576V120zm-40 64v648H528V184h232zm-288 0v648H264V184h208zm280 584H536v56h216v-56zM464 192H272v632h192V192zm-56 576v16h-3v-16h3zm-14 0v13h9v3h-13v-16h4zm-25 0 8 11v-11h3v16h-3l-8-10v10h-3v-16h3zm-11 0 7 16h-4l-2-4h-7l-1 4h-4l7-16h4zm-12 0v16h-4v-16h4zm-15 0v13h9v3h-12v-16h3zm25 4-2 6h4l-2-6zm396-68H536v56h216v-56zm0-64H536v56h216v-56zm0-64H536v56h216v-56zm0-64H536v56h216v-56zm0-64H536v56h216v-56zm0-64H536v56h216v-56zm0-64H536v56h216v-56zm0-64H536v56h216v-56zm0-64H536v56h216v-56zm-24 12q7 0 11.5 4.5T744 220t-4.5 11.5T728 236t-11.5-4.5T712 220t4.5-11.5T728 204zm-84 20v8h-20v-8h20zm-32 0v8h-20v-8h20zm84-12q3 0 5.5 2.5t2.5 5.5-2.5 5.5-5.5 2.5-5.5-2.5-2.5-5.5 2.5-5.5 5.5-2.5zm-124 4q2 0 3 1t1 3-1 3-3 1-3-1-1-3 1-3 3-1zm-16 0q2 0 3 1t1 3-1 3-3 1-3-1-1-3 1-3 3-1zm88-8v8h-20v-8h20zm-32 0v8h-20v-8h20z"
    />
  </Svg>
);

export default SvgPcD600;

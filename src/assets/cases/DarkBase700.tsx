import * as React from 'react';
import type { SvgProps } from 'react-native-svg';
import Svg, { Path } from 'react-native-svg';

const SvgDarkBase700 = (props: SvgProps) => (
  <Svg viewBox="-10 0 1034 1024" width={24} height={24} {...props}>
    <Path
      fill="currentColor"
      d="M776 0v1024H264V0h512zm-46 32H310l34 42v876l-34 42h420l-34-42V74l34-42zm-434 8v944l32-40V80zm448 0-32 40v864l32 40V40zM515 823v25h-5v-7h-3q-3 0-4.5-.5T500 839q-1-2-1.5-3.5t-.5-3.5q0-4 2-6.5t5-2.5h10zm-25 0v4h-6q-2 0-3 .5t-1 2.5h10v4h-10q0 2 1 3t3 1h6v3h-6q-5 0-7-2t-2-7q0-4 2-6.5t7-2.5h6zm-29-7v7h4q2 0 3.5.5t2.5 2.5q1 1 1.5 2.5t.5 3.5q0 4-2 6.5t-5 2.5h-10v-25h5zm123 21v4h-5v-4h5zm-13-21v7h5v4h-5v7q0 2 .5 3t1.5 1h3v3h-4q-3 0-4-1t-2-3v-10h-3v-4h3v-7h5zm-9 7v4h-6q-2 0-3 .5t-1 2.5h10v4h-10q0 2 .5 2.5t2.5 1.5h7v3h-7q-4 0-6.5-2t-2.5-7q0-4 2-6.5t6-2.5h8zm-18 0v18h-5v-18h5zm-21 0v11q0 2 .5 2.5t2.5.5h4v-14h5v18h-9q-3 0-5-1t-2-4v-13h4zm-60 4h-2v10h3q2 0 3-1t1-4-1-4-4-1zm47 0h-3q-2 0-3 1t-1 4 1 4 3 1h3v-10zm74-11v19h-5v-19h5zm-40 0v5h-5v-5h5z"
    />
  </Svg>
);

export default SvgDarkBase700;

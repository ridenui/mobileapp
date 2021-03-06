import * as React from 'react';
import type { SvgProps } from 'react-native-svg';
import Svg, { Path } from 'react-native-svg';

const SvgNovaX2M = (props: SvgProps) => (
  <Svg viewBox="-10 0 1034 1024" width={24} height={24} {...props}>
    <Path
      fill="currentColor"
      d="M768 96v816h-32l-8 48h-40l-8-48H344l-8 48h-40l-8-48h-32V96h512zm-32 32H288v752h448V128zM624 744v72H400v-72h224zm-8 8H408v56h208v-56zm-172 8q8 0 14 6t6 14-6 14-14 6-14-6-6-14 6-14 14-6zm204-520v480H376V240h272zm-8 8H384v464h256V248zm5-88v1l4 5v1.5l-1 .5h-5l-1-1v1h-7q-1 0-2-.5t-1-1.5v-3q0-1 .5-2t1.5-1h6v2h-6v4h6l4-5v-1h1zm47 0q1 0 1.5.5t.5 1.5v4l-.5 1.5-1.5.5h-7v-8h7zm-22 0v6h6l3-5v-1h1l1 1 3 6h1l-.5.5-.5.5h-6l-1-1v1h-7q-1 0-1.5-.5t-.5-1.5v-6h2zm-2 0v2h-7v1h7v2h-7v1h7v2h-8.5l-.5-1v-6.5l1-.5h8zm-10 0v2h-6.5l-.5 1h5q1 0 2 1t1 2l-.5 1-1.5 1h-7v-2h7v-1h-5q-1 0-2-.5t-1-1.5.5-2 1.5-1h7zm46 0v2h-7v1h5q1 0 1.5 1t.5 2l-.5 1-1.5 1h-7v-2h7v-1h-5q-1 0-1.5-.5t-.5-1.5.5-2 1.5-1h7zm64-96v24H256V64h512z"
    />
  </Svg>
);

export default SvgNovaX2M;

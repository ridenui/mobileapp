import React from 'react';
import { render } from '@dev/test-utils';
import { Slider } from './Slider';

test('Slider', () => {
  const { toJSON } = render(<Slider>Slider</Slider>);
  expect(toJSON()).toMatchSnapshot();
});

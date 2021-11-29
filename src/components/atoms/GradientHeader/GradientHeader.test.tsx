import React from 'react';
import { render } from '@dev/test-utils';
import { GradientHeader } from './GradientHeader';

test('GradientHeader', () => {
  const { toJSON } = render(<GradientHeader />);
  expect(toJSON()).toMatchSnapshot();
});

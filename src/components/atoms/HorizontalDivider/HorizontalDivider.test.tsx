import React from 'react';
import { render } from '@dev/test-utils';
import { HorizontalDivider } from './HorizontalDivider';

test('HorizontalDivider', () => {
  const { toJSON } = render(<HorizontalDivider>HorizontalDivider</HorizontalDivider>);
  expect(toJSON()).toMatchSnapshot();
});

import React from 'react';
import { render } from '@dev/test-utils';
import { LegendItem } from './LegendItem';

test('LegendItem', () => {
  const { toJSON } = render(<LegendItem>LegendItem</LegendItem>);
  expect(toJSON()).toMatchSnapshot();
});

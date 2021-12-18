import React from 'react';
import { render } from '@dev/test-utils';
import { UsageIndicator } from './UsageIndicator';

test('UsageIndicator', () => {
  const { toJSON } = render(<UsageIndicator>UsageIndicator</UsageIndicator>);
  expect(toJSON()).toMatchSnapshot();
});

import React from 'react';
import { render } from '@dev/test-utils';
import { AdvancedUsageIndicator } from './AdvancedUsageIndicator';

test('AdvancedUsageIndicator', () => {
  const { toJSON } = render(<AdvancedUsageIndicator>AdvancedUsageIndicator</AdvancedUsageIndicator>);
  expect(toJSON()).toMatchSnapshot();
});

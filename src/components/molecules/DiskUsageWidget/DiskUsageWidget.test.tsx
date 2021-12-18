import React from 'react';
import { render } from '@dev/test-utils';
import { DiskUsageWidget } from './DiskUsageWidget';

test('DiskUsageWidget', () => {
  const { toJSON } = render(<DiskUsageWidget>DiskUsageWidget</DiskUsageWidget>);
  expect(toJSON()).toMatchSnapshot();
});

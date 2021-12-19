import React from 'react';
import { render } from '@dev/test-utils';
import { CpuUsageWidget } from './CpuUsageWidget';

test('CpuUsageWidget', () => {
  const { toJSON } = render(<CpuUsageWidget>CpuUsageWidget</CpuUsageWidget>);
  expect(toJSON()).toMatchSnapshot();
});

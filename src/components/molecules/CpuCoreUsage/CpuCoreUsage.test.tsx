import React from 'react';
import { render } from '@dev/test-utils';
import { CpuCoreUsage } from './CpuCoreUsage';

test('CpuCoreUsage', () => {
  const { toJSON } = render(<CpuCoreUsage>CpuCoreUsage</CpuCoreUsage>);
  expect(toJSON()).toMatchSnapshot();
});

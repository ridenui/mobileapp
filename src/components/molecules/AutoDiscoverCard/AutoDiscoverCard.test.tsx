import React from 'react';
import { render } from '@dev/test-utils';
import { AutoDiscoverCard } from './AutoDiscoverCard';

test('AutoDiscoverCard', () => {
  const { toJSON } = render(<AutoDiscoverCard>AutoDiscoverCard</AutoDiscoverCard>);
  expect(toJSON()).toMatchSnapshot();
});

import React from 'react';
import { render } from '@dev/test-utils';
import { Button } from './Button';

test('Button', () => {
  const { toJSON } = render(<Button>Button</Button>);
  expect(toJSON()).toMatchSnapshot();
});

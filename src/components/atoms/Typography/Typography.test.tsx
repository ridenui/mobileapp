import React from 'react';
import { render } from '@dev/test-utils';
import { Typography, TypographyVariants } from './Typography';

test('Typography', () => {
  const { toJSON } = render(
    <Typography variant={TypographyVariants.Overline}>Typography</Typography>,
  );
  expect(toJSON()).toMatchSnapshot();
});

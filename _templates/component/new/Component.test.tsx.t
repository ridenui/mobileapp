---
to: <%= path_from_root %>.test.tsx
---

import React from 'react';
import { render } from '@dev/test-utils';
import { <%= name %> } from './<%= name%>';

test('<%= name %>', () => {
  const { toJSON } = render(<<%= name %>><%= name %></<%= name %>>);
  expect(toJSON()).toMatchSnapshot();
});

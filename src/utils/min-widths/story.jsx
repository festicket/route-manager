// @flow

import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import minWidths from './';

const info = `
Our \`minWidths\` are based on minimum viewport widths.

~~~js
minWidths: {
  // Extra small screen / phone
  xs: ${minWidths.xs}px,
  // Small screen / phone
  sm: ${minWidths.sm}px,
  // Medium screen / tablet
  md: ${minWidths.md}px,
  // Large screen / desktop
  lg: ${minWidths.lg}px,
};
~~~

Usage:
~~~js

import { minWidths } from '@festicket/react-ui-components';

minWidths.xs; // ${minWidths.sm}

~~~
`;

// $FlowFixMe - Flow doesn't like addWithPercyOptions
storiesOf('Utilities / Responsive Utilities', module).addWithPercyOptions(
  'Responsive Min-Width Breakpoints',
  { skip: true },
  withInfo({
    text: info,
    source: false,
    propTables: null,
  })(() => {}),
);

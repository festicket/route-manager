// @flow

import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import styled from 'styled-components';

import breakpoint from 'src/utils/breakpoint';
import theme from 'src/utils/theme';

const info = `
# breakpoint

The breakpoint utility provides a shorthand way to generate media queries in your css.

The table below shows what screen sizes each label targets.


------------------------label------------------------       | xs | sm | md | lg |
-|-|-|-|-|
\`breakpoint('xs')\`     | 💯 |    |    |    |
\`breakpoint('sm')\`      |    | 💯 |    |    |
\`breakpoint('md')\`      |    |    | 💯 |    |
\`breakpoint('lg')\`      |    |    |    | 💯 |
\`breakpoint('from-sm')\` |    | 💯 | 💯 | 💯  |
\`breakpoint('from-md')\` |    |    | 💯  | 💯 |
\`breakpoint('from-lg')\` |    |    |    | 💯  |
\`breakpoint('to-sm')\`   | 💯 |    |    |    |
\`breakpoint('to-md')\`   | 💯 | 💯 |    |    |
\`breakpoint('to-lg')\`   | 💯 | 💯 | 💯 |    |

---

The breakpoints that we use are defined in \`theme.js\`. 
They are based on minimum viewport widths. 

~~~js
theme.breakpoints: {
  // Extra small screen / phone
  xs: ${theme.breakpoints.xs}px,
  // Small screen / phone
  sm: ${theme.breakpoints.sm}px,
  // Medium screen / tablet
  md: ${theme.breakpoints.md}px,
  // Large screen / desktop
  lg: ${theme.breakpoints.lg}px,
  // Extra large screen / wide desktop
  xl: ${theme.breakpoints.xlg}px
};
~~~
`;

const Wrapper = styled.div`
  font-family: monospace;
  font-weight: 900;
  display: flex;
  flex-wrap: wrap;

  > * {
    display: flex;
    flex-basis: 100%;

    ${breakpoint('to-md')`
      flex-direction: column;
    `};
  }
  > * > * {
    background-color: red;
    margin-bottom: 5px;
    display: flex;
    flex-grow: 1;
    justify-content: center;
    align-items: center;
    color: white;

    ${breakpoint('from-md')`
      &:not(:last-child) {
        margin-right: 10px;
      };
    `};
  }

  ${breakpoint('xs')`
  .xs {
    background-color: green;
  }
  `};
  ${breakpoint('sm')`
  .sm {
    background-color: green;
  }
  `};
  ${breakpoint('md')`
  .md {
    background-color: green;
  }
  `};
  ${breakpoint('lg')`
  .lg {
    background-color: green;
  }
  `};
  ${breakpoint('from-sm')`
  .from-sm {
    background-color: green;
  }
  `};
  ${breakpoint('from-md')`
  .from-md {
    background-color: green;
  }
  `};
  ${breakpoint('from-lg')`
  .from-lg {
    background-color: green;
  }
  `};
  ${breakpoint('to-sm')`
  .to-sm {
    background-color: green;
  }
  `};
  ${breakpoint('to-md')`
  .to-md {
    background-color: green;
  }
  `};
  ${breakpoint('to-lg')`
  .to-lg {
    background-color: green;
  }
  `};
`;

storiesOf('Utilities', module).add(
  'Breakpoint',
  withInfo({
    text: info,
    source: false,
  })(() => (
    <Wrapper>
      <div>
        <div className="xs">breakpoint(&apos;xs&apos;)</div>
        <div className="sm">breakpoint(&apos;sm&apos;)</div>
        <div className="md">breakpoint(&apos;md&apos;)</div>
        <div className="lg">breakpoint(&apos;lg&apos;)</div>
      </div>
      <div>
        <div className="from-sm">breakpoint(&apos;from-sm&apos;)</div>
        <div className="from-md">breakpoint(&apos;from-md&apos;)</div>
        <div className="from-lg">breakpoint(&apos;from-lg&apos;)</div>
      </div>
      <div>
        <div className="to-sm">breakpoint(&apos;to-sm&apos;)</div>
        <div className="to-md">breakpoint(&apos;to-md&apos;)</div>
        <div className="to-lg">breakpoint(&apos;to-lg&apos;)</div>
      </div>
    </Wrapper>
  )),
);

// @flow

import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { breakpoints } from './';

import * as Styles from './story-styles';

const info = `
# breakpoint

The breakpoint utility provides a shorthand way to generate media queries in your css.

The table below shows what screen sizes each function targets.

function                  | xs | sm | md | lg |
-|-|-|-|-|
\`breakpoint('[media-]xs')\`      | 💯 |    |    |    |
\`breakpoint('[media-]sm')\`      |    | 💯 |    |    |
\`breakpoint('[media-]md')\`      |    |    | 💯 |    |
\`breakpoint('[media-]lg')\`      |    |    |    | 💯 |
\`breakpoint('[media-]from-sm')\` |    | 💯 | 💯 | 💯  |
\`breakpoint('[media-]from-md')\` |    |    | 💯 | 💯 |
\`breakpoint('[media-]from-lg')\` |    |    |    | 💯  |
\`breakpoint('[media-]to-sm')\`   | 💯 |    |    |    |
\`breakpoint('[media-]to-md')\`   | 💯 | 💯 |    |    |
\`breakpoint('[media-]to-lg')\`   | 💯 | 💯 | 💯 |     |

---
## Usage Example (with Styled Components):

Use the media prefix to only proved the media selector text inline in the code.
The advantage of this approach is that you will get CSS syntax highlighting in your IDE.

~~~js
import { breakpoint } from '@festicket/react-ui-components';

const Button = styled.button\`
  .button {
    \${breakpoint('from-sm')} { // @media (min-width: 569px) {
      background-color: green;
    };
  }
\`
~~~

Without the media prefix, it acts as a string interpolation function.

~~~js
import { breakpoint } from '@festicket/react-ui-components';

const Button = styled.button\`
  .button {
    \${breakpoint('from-sm')\`
      background-color: green;
    \`};
  }
\`
~~~

---

The breakpoints are exported as \`breakpoints\`. 
They are based on minimum viewport widths. 

~~~js
breakpoints: {
  // Extra small screen / phone
  xs: ${breakpoints.xs}px,
  // Small screen / phone
  sm: ${breakpoints.sm}px,
  // Medium screen / tablet
  md: ${breakpoints.md}px,
  // Large screen / desktop
  lg: ${breakpoints.lg}px,
};
~~~
`;

storiesOf('Utilities', module).add(
  'Breakpoint',
  withInfo({
    text: info,
    source: false,
    propTables: null,
  })(() => (
    <div>
      <Styles.WrapperBreakpointMedia>
        <div>
          <div className="media-xs">breakpoint(&apos;media-xs&apos;)</div>
          <div className="media-sm">breakpoint(&apos;media-sm&apos;)</div>
          <div className="media-md">breakpoint(&apos;media-md&apos;)</div>
          <div className="media-lg">breakpoint(&apos;media-lg&apos;)</div>
        </div>
        <div>
          <div className="media-from-sm">
            breakpoint(&apos;media-from-sm&apos;)
          </div>
          <div className="media-from-md">
            breakpoint(&apos;media-from-md&apos;)
          </div>
          <div className="media-from-lg">
            breakpoint(&apos;media-from-lg&apos;)
          </div>
        </div>
        <div>
          <div className="media-to-sm">breakpoint(&apos;media-to-sm&apos;)</div>
          <div className="media-to-md">breakpoint(&apos;media-to-md&apos;)</div>
          <div className="media-to-lg">breakpoint(&apos;media-to-lg&apos;)</div>
        </div>
      </Styles.WrapperBreakpointMedia>
      <br />
      <Styles.WrapperBreakpoint>
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
      </Styles.WrapperBreakpoint>
      <Styles.WrapperHeading>
        <p>
          Current Screen Breakpoint: <span className="current" />
        </p>
        <p>
          The green divs are targeted by the breakpoint function specified
          inside that div.
        </p>
      </Styles.WrapperHeading>
    </div>
  )),
);

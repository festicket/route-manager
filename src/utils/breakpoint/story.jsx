// @flow

import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import * as Styles from './story-styles';

const info = `
# breakpoint

The breakpoint utility provides a shorthand way to generate media queries in your css.

Use the **media utility** instead for IDE syntax highlighting of nested CSS.

The table below shows what screen sizes each function targets.

function                  | xs | sm | md | lg |
-|-|-|-|-|
\`breakpoint('xs')\`      | 💯 |    |    |    |
\`breakpoint('sm')\`      |    | 💯 |    |    |
\`breakpoint('md')\`      |    |    | 💯 |    |
\`breakpoint('lg')\`      |    |    |    | 💯 |
\`breakpoint('from-sm')\` |    | 💯 | 💯 | 💯  |
\`breakpoint('from-md')\` |    |    | 💯 | 💯 |
\`breakpoint('from-lg')\` |    |    |    | 💯  |
\`breakpoint('to-sm')\`   | 💯 |    |    |    |
\`breakpoint('to-md')\`   | 💯 | 💯 |    |    |
\`breakpoint('to-lg')\`   | 💯 | 💯 | 💯 |     |

---
## Usage Example (with Styled Components):

~~~
import { breakpoint } from '@festicket/react-ui-components';

const Button = styled.button\`
  .button {
    \${breakpoint('from-sm')\`
      background-color: green;
    \`};
  }
\`
~~~
`;

// $FlowFixMe - Flow doesn't like addWithPercyOptions
storiesOf('Utilities / Responsive Utilities', module).addWithPercyOptions(
  'Breakpoint',
  { widths: [320, 568, 569, 768, 769, 960, 961] },
  withInfo({
    text: info,
    source: false,
    propTables: null,
  })(() => (
    <div>
      <Styles.Wrapper>
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
      </Styles.Wrapper>
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

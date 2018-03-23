// @flow

import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import breakpoints from 'src/utils/breakpoints';

import * as Styles from './story-styles';

const info = `
# media

The media utility provides a shorthand way to generate media queries in your css.

The table below shows what screen sizes each function targets.

function                  | xs | sm | md | lg |
-|-|-|-|-|
\`media('xs')\`      | 💯 |    |    |    |
\`media('sm')\`      |    | 💯 |    |    |
\`media('md')\`      |    |    | 💯 |    |
\`media('lg')\`      |    |    |    | 💯 |
\`media('from-sm')\` |    | 💯 | 💯 | 💯  |
\`media('from-md')\` |    |    | 💯 | 💯 |
\`media('from-lg')\` |    |    |    | 💯  |
\`media('to-sm')\`   | 💯 |    |    |    |
\`media('to-md')\`   | 💯 | 💯 |    |    |
\`media('to-lg')\`   | 💯 | 💯 | 💯 |     |

---
## Usage Example (with Styled Components):

Use the media function to provide the  media selector CSS for your Styled Component.
The advantage of this approach over the **breakpoint** utility is that you will get CSS syntax highlighting in your IDE.

~~~js
import { media } from '@festicket/react-ui-components';

const Button = styled.button\`
  .button {
    \${breakpoint('from-sm')} { // line will render as: @media (min-width: 569px) {
      background-color: green;
    };
  }
\`
~~~

---

The breakpoints used are as follows. They are based on minimum viewport widths. 

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
  'Media',
  withInfo({
    text: info,
    source: false,
    propTables: null,
  })(() => (
    <div>
      <Styles.WrapperBase>
        <div>
          <div className="xs">media(&apos;xs&apos;)</div>
          <div className="sm">media(&apos;sm&apos;)</div>
          <div className="md">media(&apos;md&apos;)</div>
          <div className="lg">media(&apos;lg&apos;)</div>
        </div>
        <div>
          <div className="from-sm">media(&apos;from-sm&apos;)</div>
          <div className="from-md">media(&apos;from-md&apos;)</div>
          <div className="from-lg">media(&apos;from-lg&apos;)</div>
        </div>
        <div>
          <div className="to-sm">media(&apos;to-sm&apos;)</div>
          <div className="to-md">media(&apos;to-md&apos;)</div>
          <div className="to-lg">media(&apos;to-lg&apos;)</div>
        </div>
      </Styles.WrapperBase>
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

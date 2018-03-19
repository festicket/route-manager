// @flow

import React from 'react';
import { storiesOf } from '@storybook/react';

import HtmlWrapper from './';
import { h2AndParagraphs, oneParagraph } from './tests/fixtures';

storiesOf('Components / Text / HtmlWrapper', module)
  .add('H2 and several paragraphs', () => (
    <div>
      <p>Below this, expect a span containing an h2 and some paragraphs.</p>
      <hr />
      <HtmlWrapper htmlString={h2AndParagraphs} />
    </div>
  ))
  .add('One paragraph', () => (
    <div>
      <p>Below this, expect a span containing one paragraph.</p>
      <hr />
      <HtmlWrapper htmlString={oneParagraph} />
    </div>
  ));

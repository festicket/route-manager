// @flow

import React from 'react';
import { storiesOf } from '@storybook/react';
import { Background } from 'src/utils/storybook-helpers';

import HtmlWrapper from './';
import { h2AndParagraphs, oneParagraph } from './tests/fixtures';

storiesOf('Components / Text / HtmlWrapper', module)
  .add('H2 and several paragraphs', () => (
    <div>
      <Background.Documentation>
        <p>Below this, expect a span containing an h2 and some paragraphs.</p>
      </Background.Documentation>
      <HtmlWrapper htmlString={h2AndParagraphs} />
    </div>
  ))
  .add('One paragraph', () => (
    <div>
      <Background.Documentation>
        <p>Below this, expect a span containing one paragraph.</p>
      </Background.Documentation>
      <HtmlWrapper htmlString={oneParagraph} />
    </div>
  ));

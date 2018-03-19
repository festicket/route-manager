// @flow

import React from 'react';
import { storiesOf } from '@storybook/react';

import HtmlWrapper from './';
import { h2AndParagraphs, oneParagraph } from './tests/fixtures';

storiesOf('Components / Text / HtmlWrapper', module)
  .add('H2 and several paragraphs', () => (
    <div>
      <HtmlWrapper htmlString={h2AndParagraphs} />
    </div>
  ))
  .add('One paragraph', () => (
    <div>
      <HtmlWrapper htmlString={oneParagraph} />
    </div>
  ));

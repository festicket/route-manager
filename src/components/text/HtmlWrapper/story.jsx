// @flow

import React from 'react';
import { storiesOf } from '@storybook/react';
import { Background, Content } from 'src/utils/storybook-helpers';

import HtmlWrapper from './';
import { h2AndParagraphs, oneParagraph, variedContent } from './tests/fixtures';

storiesOf('Components / Text / HtmlWrapper', module)
  .add('Varied content', () => (
    <div>
      <Background.Documentation>
        <p>Below this, expect a span containing an h2 and some paragraphs.</p>
      </Background.Documentation>
      <Content>
        <HtmlWrapper htmlString={variedContent} />
      </Content>
    </div>
  ))
  .add('H2 and several paragraphs', () => (
    <div>
      <Background.Documentation>
        <p>Below this, expect a span containing an h2 and some paragraphs.</p>
      </Background.Documentation>
      <Content>
        <HtmlWrapper htmlString={h2AndParagraphs} />
      </Content>
    </div>
  ))
  .add('One paragraph', () => (
    <div>
      <Background.Documentation>
        <p>Below this, expect a span containing one paragraph.</p>
      </Background.Documentation>
      <Content>
        <HtmlWrapper htmlString={oneParagraph} />
      </Content>
    </div>
  ));

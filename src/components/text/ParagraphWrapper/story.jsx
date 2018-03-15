// @flow

import React from 'react';
import { storiesOf } from '@storybook/react';

import ParagraphWrapper from './';
import html from './tests/fixtures';
import BodyText from '../BodyText';

storiesOf('Components / Text / ParagraphWrapper', module).add('default', () => (
  <div>
    <BodyText element="span">
      <ParagraphWrapper html={html} />
    </BodyText>
  </div>
));

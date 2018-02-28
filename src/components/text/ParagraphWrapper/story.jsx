// @flow

import React from 'react';
import { storiesOf } from '@storybook/react';

import ParagraphWrapper from './';
import html from './tests/fixtures';
import { Background } from '../../../utils/storybook-helpers';

storiesOf('Components / Text / ParagraphWrapper', module).add('default', () => (
  <Background.White>
    <ParagraphWrapper html={html} />
  </Background.White>
));

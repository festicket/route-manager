// @flow

import React from 'react';
import { storiesOf } from '@storybook/react';

import ParagraphWrapper from './';
import html from './tests/fixtures';
import { Background } from '../../../utils/storybook-helpers';
import BodyText from '../BodyText';

storiesOf('Components / Text / ParagraphWrapper', module).add('default', () => (
  <Background.White>
    <BodyText element="span">
      <ParagraphWrapper html={html} />
    </BodyText>
  </Background.White>
));

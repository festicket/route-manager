// @flow

import React from 'react';
import { storiesOf } from '@storybook/react';

import Details from './';
import { title, body } from './tests/fixtures';
import BodyText from '../../text/BodyText';

storiesOf('Components / Layout / Details', module)
  .add('default', () => (
    <Details title={title}>
      <BodyText>{body}</BodyText>
    </Details>
  ))
  .add('open initially', () => (
    <Details title={title} openInitially>
      <BodyText>{body}</BodyText>
    </Details>
  ));

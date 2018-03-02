// @flow

import React from 'react';
import { storiesOf } from '@storybook/react';

import Details from './';
import { title, body } from './tests/fixtures';
import BodyText from '../../text/BodyText';
import { Background } from '../../../utils/storybook-helpers';

storiesOf('Components / Layout / Details', module)
  .add('default', () => (
    <Background.White>
      <Details title={title}>
        <BodyText>{body}</BodyText>
      </Details>
    </Background.White>
  ))
  .add('open initially', () => (
    <Background.White>
      <Details title={title} openInitially>
        <BodyText>{body}</BodyText>
      </Details>
    </Background.White>
  ));

// @flow

import React from 'react';
import { storiesOf } from '@storybook/react';

import Callout from './';
import BodyText from '../BodyText';
import fixture from './tests/fixtures';
import { Background } from '../../../utils/storybook-helpers';

storiesOf('Components / Text / Callout', module).add('default', () => (
  <Background.White>
    <Callout>
      <BodyText>{fixture}</BodyText>
    </Callout>
  </Background.White>
));

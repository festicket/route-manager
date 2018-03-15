// @flow

import React from 'react';
import { storiesOf } from '@storybook/react';

import Callout from './';
import BodyText from '../BodyText';
import fixture from './tests/fixtures';

storiesOf('Components / Text / Callout', module).add('default', () => (
  <Callout>
    <BodyText>{fixture}</BodyText>
  </Callout>
));

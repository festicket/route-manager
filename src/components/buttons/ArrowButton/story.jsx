// @flow

import React from 'react';
import { storiesOf } from '@storybook/react';
import ArrowButton from './';

storiesOf('Components / Buttons / ArrowButton', module).add('default', () => (
  <ArrowButton to="https://www.google.com" external />
));

// @flow

import React from 'react';
import { storiesOf } from '@storybook/react';
import ArrowButton from './';
import Anchor from '../../text/Anchor';

storiesOf('Components / Buttons / ArrowButton', module).add('default', () => (
  <ArrowButton element={Anchor} to="https://www.google.com" external />
));

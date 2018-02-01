// @flow

import React from 'react';
import { storiesOf } from '@storybook/react';
import SecondaryButton from './';

storiesOf('Components / Buttons / SecondaryButton', module).add(
  'default',
  () => <SecondaryButton />,
);

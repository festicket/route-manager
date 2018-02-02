// @flow

import React from 'react';
import { storiesOf } from '@storybook/react';
import CloseButton from './';

storiesOf('Components / Buttons / CloseButton', module)
  .add('base', () => <CloseButton alt="Close" handleClose={() => {}} />)
  .add('Size - 50px', () => (
    <CloseButton alt="Close" handleClose={() => {}} size={50} />
  ));

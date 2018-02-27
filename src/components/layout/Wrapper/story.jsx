// @flow

import React from 'react';
import { storiesOf } from '@storybook/react';
import Wrapper from './';

storiesOf('Components / Layout / Wrapper', module)
  .add('Normal size', () => (
    <Wrapper size="normal">
      <div>This is some content.</div>
    </Wrapper>
  ))
  .add('Alternative size', () => (
    <Wrapper size="alternative">
      <div>This is some content.</div>
    </Wrapper>
  ))
  .add('Full size', () => (
    <Wrapper size="full">
      <div>This is some content.</div>
    </Wrapper>
  ));

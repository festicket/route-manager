// @flow

import React from 'react';
import { storiesOf } from '@storybook/react';
import Container from './';

storiesOf('Components / Layout / Container', module)
  .add('Normal size', () => (
    <Container size="normal">
      <div>This is some content.</div>
    </Container>
  ))
  .add('Alternative size', () => (
    <Container size="alternative">
      <div>This is some content.</div>
    </Container>
  ))
  .add('Full size', () => (
    <Container size="full">
      <div>This is some content.</div>
    </Container>
  ));

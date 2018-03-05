// @flow

import React from 'react';
import { storiesOf } from '@storybook/react';
import { getLoremIpsumParagraph } from 'src/utils/storybook-helpers/faker';
import Container from './';

storiesOf('Components / Layout / Container', module)
  .add('Normal size', () => (
    <Container size="normal">
      <div>{getLoremIpsumParagraph()}</div>
    </Container>
  ))
  .add('Alternative size', () => (
    <Container size="alternative">
      <div>{getLoremIpsumParagraph()}</div>
    </Container>
  ))
  .add('Full size', () => (
    <Container size="full">
      <div>{getLoremIpsumParagraph()}</div>
    </Container>
  ));

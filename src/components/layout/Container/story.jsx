// @flow

import React from 'react';
import { storiesOf } from '@storybook/react';
import { getLoremIpsumParagraph } from 'src/utils/storybook-helpers/faker';
import Container from './';

storiesOf('Components / Layout / Container', module)
  .add('Normal size', () => (
    <div>
      <Container size="normal">
        Container Normal size<br />
        {getLoremIpsumParagraph()}
      </Container>
      <br />
      <Container size="normal" noPadding>
        Container Normal size with no padding<br />
        {getLoremIpsumParagraph()}
      </Container>
    </div>
  ))
  .add('Alternative size', () => (
    <div>
      <Container size="alternative">
        Container Alternative size<br />
        {getLoremIpsumParagraph()}
      </Container>
      <br />
      <Container size="alternative" noPadding>
        Container Alternative size with no padding<br />
        {getLoremIpsumParagraph()}
      </Container>
    </div>
  ))
  .add('Full size', () => (
    <Container size="full">
      <div>
        Container Full size<br />
        {getLoremIpsumParagraph()}
      </div>
    </Container>
  ));

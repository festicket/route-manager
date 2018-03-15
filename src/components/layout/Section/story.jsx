// @flow

import React from 'react';
import { storiesOf } from '@storybook/react';
import { Background } from 'src/utils/storybook-helpers';
import { getLoremIpsumParagraph } from 'src/utils/storybook-helpers/faker';

import Section from './';

storiesOf('Components / Layout / Section', module)
  .add('section variant', () => (
    <div>
      <Background.Documentation>
        <p>Margin-bottom should change depending on the viewport width.</p>
      </Background.Documentation>
      <Section variant="section">{getLoremIpsumParagraph()}</Section>
      <Section variant="section">{getLoremIpsumParagraph()}</Section>
      <Section variant="section">{getLoremIpsumParagraph()}</Section>
    </div>
  ))
  .add('semi-section variant', () => (
    <div>
      <Background.Documentation>
        <p>Margin-bottom should change depending on the viewport width.</p>
      </Background.Documentation>
      <Section variant="semi-section">{getLoremIpsumParagraph()}</Section>
      <Section variant="semi-section">{getLoremIpsumParagraph()}</Section>
      <Section variant="semi-section">{getLoremIpsumParagraph()}</Section>
    </div>
  ));

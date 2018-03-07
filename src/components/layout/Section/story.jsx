// @flow

import React from 'react';
import { storiesOf } from '@storybook/react';
import { Background } from 'src/utils/storybook-helpers';
import { getLoremIpsumParagraph } from 'src/utils/storybook-helpers/faker';

import Section from './';

storiesOf('Components / Layout / Section', module)
  .add('section variant', () => (
    <div>
      <Background.Monospace>
        <p>Margin-bottom should change depending on the viewport width.</p>
      </Background.Monospace>
      <Background.White>
        <Section variant="section">{getLoremIpsumParagraph()}</Section>
        <Section variant="section">{getLoremIpsumParagraph()}</Section>
        <Section variant="section">{getLoremIpsumParagraph()}</Section>
      </Background.White>
    </div>
  ))
  .add('semi-section variant', () => (
    <div>
      <Background.Monospace>
        <p>Margin-bottom should change depending on the viewport width.</p>
      </Background.Monospace>
      <Background.White>
        <Section variant="semi-section">{getLoremIpsumParagraph()}</Section>
        <Section variant="semi-section">{getLoremIpsumParagraph()}</Section>
        <Section variant="semi-section">{getLoremIpsumParagraph()}</Section>
      </Background.White>
    </div>
  ));

// @flow

import React from 'react';
import { storiesOf } from '@storybook/react';
import Section from './';
import { Background } from '../../../utils/storybook-helpers';

storiesOf('Components / Layout / Section', module)
  .add('section variant', () => (
    <Background.White>
      <Section variant="section">This is some content.</Section>
      <Section variant="section">This is some content.</Section>
      <Section variant="section">This is some content.</Section>
    </Background.White>
  ))
  .add('semi-section variant', () => (
    <Background.White>
      <Section variant="semi-section">This is some content.</Section>
      <Section variant="semi-section">This is some content.</Section>
      <Section variant="semi-section">This is some content.</Section>
    </Background.White>
  ));

// @flow
import React from 'react';
import { storiesOf } from '@storybook/react';
import BodyText from './';
import { Background } from '../../../utils/storybook-helpers/';

storiesOf('Components / Text / BodyText', module).add('variations', () => (
  <Background.White>
    <BodyText size="tiny">Tiny size</BodyText>
    <BodyText size="small">Small size</BodyText>
    <BodyText size="regular">Regular size</BodyText>
    <BodyText size="small" spacing="md">
      Small size with medium spacing
    </BodyText>
    <Background.Black>
      <BodyText size="small" spacing="sm" color="white">
        Small size with small spacing + white color
      </BodyText>
    </Background.Black>
  </Background.White>
));

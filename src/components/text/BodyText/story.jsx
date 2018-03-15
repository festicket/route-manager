// @flow

import React from 'react';
import { storiesOf } from '@storybook/react';
import { Background } from 'src/utils/storybook-helpers';

import BodyText from './';

storiesOf('Components / Text / BodyText', module).add('variations', () => (
  <div>
    <BodyText size="tiny">Tiny size</BodyText>
    <BodyText size="small">Small size</BodyText>
    <BodyText size="regular">Regular size</BodyText>
    <BodyText size="small" spacing="md">
      Small size with medium spacing
    </BodyText>
    <Background.Theme>
      <BodyText size="small" spacing="sm" color="white">
        Small size with small spacing + white color
      </BodyText>
    </Background.Theme>
  </div>
));

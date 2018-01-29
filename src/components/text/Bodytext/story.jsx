import React from 'react';
import { storiesOf } from '@storybook/react';
import Bodytext from './';
import { Background } from '../../../utils/storybook-helpers/';

storiesOf('Components / Text / Bodytext', module).add('variations', () => (
  <Background.White>
    <Bodytext size="tiny">Tiny size</Bodytext>
    <Bodytext size="small">Small size</Bodytext>
    <Bodytext size="regular">Regular size</Bodytext>
    <Bodytext size="small" spacing="md">
      Small size with medium spacing
    </Bodytext>
    <Background.Black>
      <Bodytext size="small" spacing="sm" color="white">
        Small size with small spacing + white color
      </Bodytext>
    </Background.Black>
  </Background.White>
));

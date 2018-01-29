import React from 'react';
import { storiesOf } from '@storybook/react';
import { Background } from '../../../utils/storybook-helpers/';
import Highlight from './';

storiesOf('Components / Text / Highlight', module).add('variations', () => (
  <Background.White>
    <Highlight size="tiny">Tiny size</Highlight>
    <Highlight size="small">Small size</Highlight>
    <Highlight size="regular">Regular size</Highlight>
    <Highlight size="small" spacing="md">
      Small size with medium spacing
    </Highlight>
    <Background.Black>
      <Highlight size="small" spacing="sm" color="white">
        Small size with small spacing + white color
      </Highlight>
    </Background.Black>
  </Background.White>
));

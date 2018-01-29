import React from 'react';
import { storiesOf } from '@storybook/react';
import Bodytext from './';

storiesOf('Components / Text / Bodytext', module).add('default', () => (
  <div>
    <Bodytext size="tiny">Tiny size</Bodytext>
    <Bodytext size="small">Small size</Bodytext>
    <Bodytext size="regular">Regular size</Bodytext>
  </div>
));

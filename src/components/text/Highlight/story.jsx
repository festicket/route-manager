import React from 'react';
import { storiesOf } from '@storybook/react';
import Highlight from './';

storiesOf('Components / Text / Highlight', module).add('default', () => (
  <div>
    <Highlight size="tiny">Tiny size</Highlight>
    <Highlight size="small">Small size</Highlight>
    <Highlight size="regular">Regular size</Highlight>
  </div>
));

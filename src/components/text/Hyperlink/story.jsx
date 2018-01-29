import React from 'react';
import { storiesOf } from '@storybook/react';
import Hyperlink from './';

storiesOf('Components / Text / Hyperlink', module).add('default', () => (
  <div>
    <Hyperlink size="tiny">Tiny size</Hyperlink>
    <Hyperlink size="small">Small size</Hyperlink>
    <Hyperlink size="regular">Regular size</Hyperlink>
  </div>
));

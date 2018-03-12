// @flow

import React from 'react';
import { storiesOf } from '@storybook/react';
import { Background } from 'src/utils/storybook-helpers';

import Hyperlink from './';

storiesOf('Components / Text / Hyperlink', module).add('variations', () => (
  <div>
    <Hyperlink size="tiny">Tiny size</Hyperlink>
    <Hyperlink size="small">Small size</Hyperlink>
    <Hyperlink size="regular">Regular size</Hyperlink>
    <Background.Black>
      <Hyperlink size="small" spacing="sm" color="white">
        Small size with small spacing + white color
      </Hyperlink>
    </Background.Black>
  </div>
));

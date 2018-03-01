// @flow

import React from 'react';
import { storiesOf } from '@storybook/react';
import Gutter from './';

storiesOf('Components / Layout / Gutter', module).add('default', () => (
  <Gutter>
    <span>This is some content.</span>
  </Gutter>
));

// @flow

import React from 'react';
import { storiesOf } from '@storybook/react';
import Box from './';

storiesOf('Components / Layout / Box', module).add('default', () => (
  <Box>
    <span>This is some content.</span>
  </Box>
));

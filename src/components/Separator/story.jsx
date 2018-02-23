// @flow

import React from 'react';
import { storiesOf } from '@storybook/react';
import Separator from './';
import { Box } from '../../utils/storybook-helpers';

storiesOf('Components / Separator', module)
  .add('Light Separator', () => (
    <Box variant="dark">
      <Separator variant="light" />
      <Separator variant="light">
        <span>or</span>
      </Separator>
      <Separator variant="light">
        <span>lorem ipsum dolor sit amet nullisque qua suntam</span>
      </Separator>
    </Box>
  ))
  .add('Medium Separator', () => (
    <Box>
      <Separator />
      <Separator>or</Separator>
      <Separator>lorem ipsum dolor sit amet nullisque qua suntam</Separator>
    </Box>
  ))
  .add('Dark Separator', () => (
    <Box>
      <Separator variant="dark" />
      <Separator variant="dark">or</Separator>
      <Separator variant="dark">
        lorem ipsum dolor sit amet nullisque qua suntam
      </Separator>
    </Box>
  ))
  .add('Margin large variant', () => (
    <Box>
      <p>This is some text.</p>
      <Separator variant="dark" marginLarge />
      <p>This is some text.</p>
    </Box>
  ));

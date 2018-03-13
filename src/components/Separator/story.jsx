// @flow

import React from 'react';
import { storiesOf } from '@storybook/react';
import { Background } from 'src/utils/storybook-helpers';

import Separator from './';

storiesOf('Components / Separator', module)
  .add('Light Separator', () => (
    <Background.Theme>
      <Separator variant="light" />
      <Separator variant="light">
        <span>or</span>
      </Separator>
      <Separator variant="light">
        <span>lorem ipsum dolor sit amet nullisque qua suntam</span>
      </Separator>
    </Background.Theme>
  ))
  .add('Medium Separator', () => (
    <div>
      <Separator />
      <Separator>or</Separator>
      <Separator>lorem ipsum dolor sit amet nullisque qua suntam</Separator>
    </div>
  ))
  .add('Dark Separator', () => (
    <div>
      <Separator variant="dark" />
      <Separator variant="dark">or</Separator>
      <Separator variant="dark">
        lorem ipsum dolor sit amet nullisque qua suntam
      </Separator>
    </div>
  ))
  .add('Margin large variant', () => (
    <div>
      <p>This is some text.</p>
      <Separator variant="dark" marginLarge />
      <p>This is some text.</p>
    </div>
  ));

// @flow

import React from 'react';
import { storiesOf } from '@storybook/react';
import { Background } from 'src/utils/storybook-helpers';

import TertiaryHeading from './';

storiesOf('Components / Text / TertiaryHeading', module)
  .add('default', () => (
    <TertiaryHeading element="h3">Tertiary Heading</TertiaryHeading>
  ))
  .add('with white color prop', () => (
    <Background.Theme>
      <TertiaryHeading element="h3" color="white">
        Tertiary Heading
      </TertiaryHeading>
    </Background.Theme>
  ))
  .add('with light weight prop', () => (
    <TertiaryHeading element="h3" weight="light">
      Light Tertiary Heading
    </TertiaryHeading>
  ));

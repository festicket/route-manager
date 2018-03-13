// @flow

import React from 'react';
import { storiesOf } from '@storybook/react';
import { Background } from 'src/utils/storybook-helpers';

import PrimaryHeading from './';

storiesOf('Components / Text / PrimaryHeading', module)
  .add('default', () => (
    <PrimaryHeading element="h1">Primary Heading</PrimaryHeading>
  ))
  .add('with white color prop', () => (
    <Background.Theme>
      <PrimaryHeading element="h1" color="white">
        Primary Heading
      </PrimaryHeading>
    </Background.Theme>
  ));

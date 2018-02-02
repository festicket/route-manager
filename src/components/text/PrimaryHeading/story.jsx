// @flow

import React from 'react';
import { storiesOf } from '@storybook/react';
import PrimaryHeading from './';
import { Background } from '../../../utils/storybook-helpers/';

storiesOf('Components / Text / PrimaryHeading', module)
  .add('default', () => (
    <PrimaryHeading element="h1">Primary Heading</PrimaryHeading>
  ))
  .add('with white color prop', () => (
    <Background.Black>
      <PrimaryHeading element="h1" color="white">
        Primary Heading
      </PrimaryHeading>
    </Background.Black>
  ));

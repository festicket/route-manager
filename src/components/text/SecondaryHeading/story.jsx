// @flow

import React from 'react';
import { storiesOf } from '@storybook/react';
import { Background } from 'src/utils/storybook-helpers';

import SecondaryHeading from './';

storiesOf('Components / Text / SecondaryHeading', module)
  .add('default', () => (
    <SecondaryHeading element="h2">Secondary Heading</SecondaryHeading>
  ))
  .add('with white color prop', () => (
    <Background.Theme>
      <SecondaryHeading element="h2" color="white">
        Secondary Heading
      </SecondaryHeading>
    </Background.Theme>
  ))
  .add('with light weight prop', () => (
    <SecondaryHeading element="h2" weight="light">
      Light Secondary Heading
    </SecondaryHeading>
  ));

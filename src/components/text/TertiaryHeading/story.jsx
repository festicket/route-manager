import React from 'react';
import { storiesOf } from '@storybook/react';
import TertiaryHeading from './';
import { Background } from '../../../utils/storybook-helpers/';

storiesOf('Components / Text / TertiaryHeading', module)
  .add('default', () => (
    <TertiaryHeading element="h3">Tertiary Heading</TertiaryHeading>
  ))
  .add('with white color prop', () => (
    <Background.Black>
      <TertiaryHeading element="h3" color="white">
        Tertiary Heading
      </TertiaryHeading>
    </Background.Black>
  ))
  .add('with light weight prop', () => (
    <TertiaryHeading element="h3" weight="light">
      Light Tertiary Heading
    </TertiaryHeading>
  ));

import React from 'react';
import { storiesOf } from '@storybook/react';
import TertiaryHeading from './';

storiesOf('Components / Text / TertiaryHeading', module)
  .add('default', () => (
    <TertiaryHeading element="h3">Tertiary Heading</TertiaryHeading>
  ))
  .add('with white color prop', () => (
    <div style={{ backgroundColor: 'black' }}>
      <TertiaryHeading element="h3" color="white">
        Tertiary Heading
      </TertiaryHeading>
    </div>
  ))
  .add('with light weight prop', () => (
    <TertiaryHeading element="h3" weight="light">
      Light Tertiary Heading
    </TertiaryHeading>
  ));

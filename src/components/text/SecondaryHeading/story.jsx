import React from 'react';
import { storiesOf } from '@storybook/react';
import SecondaryHeading from './';

storiesOf('Components / Text / SecondaryHeading', module)
  .add('default', () => (
    <SecondaryHeading element="h2">Secondary Heading</SecondaryHeading>
  ))
  .add('with white color prop', () => (
    <div style={{ backgroundColor: 'black' }}>
      <SecondaryHeading element="h2" color="white">
        Secondary Heading
      </SecondaryHeading>
    </div>
  ))
  .add('with light weight prop', () => (
    <SecondaryHeading element="h2" weight="light">
      Light Secondary Heading
    </SecondaryHeading>
  ));

import React from 'react';
import { storiesOf } from '@storybook/react';
import PrimaryHeading from './';

storiesOf('Components / Text / PrimaryHeading', module)
  .add('default', () => (
    <PrimaryHeading element="h1">Primary Heading</PrimaryHeading>
  ))
  .add('with white color prop', () => (
    <div style={{ backgroundColor: 'black' }}>
      <PrimaryHeading element="h1" color="white">
        Primary Heading
      </PrimaryHeading>
    </div>
  ));

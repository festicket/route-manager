import React from 'react';
import { storiesOf } from '@storybook/react';
import ExampleComponent from './';

storiesOf('Components / ExampleComponent', module)
  .add('default', () => (
    <ExampleComponent />
  ));

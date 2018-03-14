// @flow
/* eslint no-console: 0 */

import React from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered';

import CloseButton from './';

const handleClick = () => console.log('Click!'); // TODO use Storybook Actions

storiesOf('Components / Buttons / CloseButton', module)
  .addDecorator(centered)
  .add('Close - a element', () => (
    <CloseButton element="a" onClick={handleClick} />
  ))
  .add('Close - button element', () => (
    <CloseButton element="button" onClick={handleClick} />
  ));

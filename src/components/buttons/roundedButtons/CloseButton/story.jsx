// @flow
/* eslint no-console: 0 */

import React from 'react';
import { storiesOf } from '@storybook/react';
import { Background } from 'src/utils/storybook-helpers/index';

import RoundedCloseButton from './';

const handleClick = () => console.log('Click!');

storiesOf('Components / Buttons / RoundedCloseButton', module)
  .add('Close - a element', () => (
    <Background.White>
      <RoundedCloseButton element="a" onClick={handleClick} />
    </Background.White>
  ))
  .add('Close - button element', () => (
    <Background.White>
      <RoundedCloseButton element="button" onClick={handleClick} />
    </Background.White>
  ));

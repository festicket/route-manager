// @flow
/* eslint no-console: 0 */

import React from 'react';
import { storiesOf } from '@storybook/react';
import { Background } from 'src/utils/storybook-helpers/index';

import CloseButton from './';

const handleClick = () => console.log('Click!'); // TODO use Storybook Actions

storiesOf('Components / Buttons / CloseButton', module)
  .add('Close - a element', () => (
    <Background.White>
      <CloseButton element="a" onClick={handleClick} />
    </Background.White>
  ))
  .add('Close - button element', () => (
    <Background.White>
      <CloseButton element="button" onClick={handleClick} />
    </Background.White>
  ));

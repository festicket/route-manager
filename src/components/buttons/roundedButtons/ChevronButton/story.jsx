// @flow
/* eslint no-console: 0 */

import React from 'react';
import { storiesOf } from '@storybook/react';
import { Background } from 'src/utils/storybook-helpers/index';

import RoundedChevronButton from './';

const handleClick = () => console.log('Click!');

storiesOf('Components / Buttons / RoundedChevronButton', module)
  .add('Right - a element', () => (
    <Background.White>
      <RoundedChevronButton onClick={handleClick} direction="right" />
    </Background.White>
  ))
  .add('Down - a element', () => (
    <Background.White>
      <RoundedChevronButton onClick={handleClick} direction="down" />
    </Background.White>
  ))
  .add('Left - a element', () => (
    <Background.White>
      <RoundedChevronButton onClick={handleClick} direction="left" />
    </Background.White>
  ))
  .add('Up - a element', () => (
    <Background.White>
      <RoundedChevronButton onClick={handleClick} direction="up" />
    </Background.White>
  ))
  .add('Right - button element', () => (
    <Background.White>
      <RoundedChevronButton
        element="button"
        onClick={handleClick}
        direction="right"
      />
    </Background.White>
  ))
  .add('Down - button element', () => (
    <Background.White>
      <RoundedChevronButton
        element="button"
        onClick={handleClick}
        direction="down"
      />
    </Background.White>
  ))
  .add('Left - button element', () => (
    <Background.White>
      <RoundedChevronButton
        element="button"
        onClick={handleClick}
        direction="left"
      />
    </Background.White>
  ))
  .add('Up - button element', () => (
    <Background.White>
      <RoundedChevronButton
        element="button"
        onClick={handleClick}
        direction="up"
      />
    </Background.White>
  ));

// @flow
/* eslint no-console: 0 */

import React from 'react';
import { storiesOf } from '@storybook/react';
import { Background } from 'src/utils/storybook-helpers';

import ChevronButton from './';

const handleClick = () => console.log('Click!');

storiesOf('Components / Buttons / ChevronButton', module)
  .add('Right - a element', () => (
    <Background.White>
      <ChevronButton element="a" onClick={handleClick} direction="right" />
    </Background.White>
  ))
  .add('Down - a element', () => (
    <Background.White>
      <ChevronButton element="a" onClick={handleClick} direction="down" />
    </Background.White>
  ))
  .add('Left - a element', () => (
    <Background.White>
      <ChevronButton element="a" onClick={handleClick} direction="left" />
    </Background.White>
  ))
  .add('Up - a element', () => (
    <Background.White>
      <ChevronButton element="a" onClick={handleClick} direction="up" />
    </Background.White>
  ))
  .add('Right - button element', () => (
    <Background.White>
      <ChevronButton element="button" onClick={handleClick} direction="right" />
    </Background.White>
  ))
  .add('Down - button element', () => (
    <Background.White>
      <ChevronButton element="button" onClick={handleClick} direction="down" />
    </Background.White>
  ))
  .add('Left - button element', () => (
    <Background.White>
      <ChevronButton element="button" onClick={handleClick} direction="left" />
    </Background.White>
  ))
  .add('Up - button element', () => (
    <Background.White>
      <ChevronButton element="button" onClick={handleClick} direction="up" />
    </Background.White>
  ));

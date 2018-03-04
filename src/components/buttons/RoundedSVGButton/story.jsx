// @flow
/* eslint no-console: 0 */

import React from 'react';
import { storiesOf } from '@storybook/react';
import { Background } from 'src/utils/storybook-helpers';

import RoundedSVGButton from './';

const handleClick = () => console.log('Click!');

storiesOf('Components / Buttons / RoundedSVGButton', module)
  .add('Right - a element', () => (
    <Background.White>
      <RoundedSVGButton onClick={handleClick} icon="right" />
    </Background.White>
  ))
  .add('Down - a element', () => (
    <Background.White>
      <RoundedSVGButton onClick={handleClick} icon="down" />
    </Background.White>
  ))
  .add('Left - a element', () => (
    <Background.White>
      <RoundedSVGButton onClick={handleClick} icon="left" />
    </Background.White>
  ))
  .add('Up - a element', () => (
    <Background.White>
      <RoundedSVGButton onClick={handleClick} icon="up" />
    </Background.White>
  ))
  .add('Close - a element', () => (
    <Background.White>
      <RoundedSVGButton onClick={handleClick} icon="close" />
    </Background.White>
  ))
  .add('Right - button element', () => (
    <Background.White>
      <RoundedSVGButton element="button" onClick={handleClick} icon="right" />
    </Background.White>
  ))
  .add('Down - button element', () => (
    <Background.White>
      <RoundedSVGButton element="button" onClick={handleClick} icon="down" />
    </Background.White>
  ))
  .add('Left - button element', () => (
    <Background.White>
      <RoundedSVGButton element="button" onClick={handleClick} icon="left" />
    </Background.White>
  ))
  .add('Up - button element', () => (
    <Background.White>
      <RoundedSVGButton element="button" onClick={handleClick} icon="up" />
    </Background.White>
  ))
  .add('Close - button element', () => (
    <Background.White>
      <RoundedSVGButton element="button" onClick={handleClick} icon="close" />
    </Background.White>
  ));

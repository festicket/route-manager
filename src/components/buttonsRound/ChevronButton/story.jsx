// @flow
/* eslint no-console: 0 */

import React from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered';

import ChevronButton from './';

const handleClick = () => console.log('Click!'); // TODO use Storybook Actions

storiesOf('Components / Buttons / ChevronButton', module)
  .addDecorator(centered)
  .add('Right - a element', () => (
    <ChevronButton element="a" onClick={handleClick} direction="right" />
  ))
  .add('Down - a element', () => (
    <ChevronButton element="a" onClick={handleClick} direction="down" />
  ))
  .add('Left - a element', () => (
    <ChevronButton element="a" onClick={handleClick} direction="left" />
  ))
  .add('Up - a element', () => (
    <ChevronButton element="a" onClick={handleClick} direction="up" />
  ))
  .add('Right - button element', () => (
    <ChevronButton element="button" onClick={handleClick} direction="right" />
  ))
  .add('Down - button element', () => (
    <ChevronButton element="button" onClick={handleClick} direction="down" />
  ))
  .add('Left - button element', () => (
    <ChevronButton element="button" onClick={handleClick} direction="left" />
  ))
  .add('Up - button element', () => (
    <ChevronButton element="button" onClick={handleClick} direction="up" />
  ));

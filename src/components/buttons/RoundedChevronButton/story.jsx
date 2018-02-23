// @flow
/* eslint no-console: 0 */
import React from 'react';
import { storiesOf } from '@storybook/react';
import RoundedChevronButton from './';

const handleClick = () => console.log('Click!');

storiesOf('Components / Buttons / RoundedChevronButton', module)
  .add('Right - a element', () => (
    <RoundedChevronButton onClick={handleClick} direction="right" />
  ))
  .add('Down - a element', () => (
    <RoundedChevronButton onClick={handleClick} direction="down" />
  ))
  .add('Left - a element', () => (
    <RoundedChevronButton onClick={handleClick} direction="left" />
  ))
  .add('Up - a element', () => (
    <RoundedChevronButton onClick={handleClick} direction="up" />
  ))
  .add('Right - button element', () => (
    <RoundedChevronButton
      element="button"
      onClick={handleClick}
      direction="right"
    />
  ))
  .add('Down - button element', () => (
    <RoundedChevronButton
      element="button"
      onClick={handleClick}
      direction="down"
    />
  ))
  .add('Left - button element', () => (
    <RoundedChevronButton
      element="button"
      onClick={handleClick}
      direction="left"
    />
  ))
  .add('Up - button element', () => (
    <RoundedChevronButton
      element="button"
      onClick={handleClick}
      direction="up"
    />
  ));

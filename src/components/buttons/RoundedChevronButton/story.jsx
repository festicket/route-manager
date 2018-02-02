// @flow
/* eslint no-console: 0 */
import React from 'react';
import { storiesOf } from '@storybook/react';
import RoundedChevronButton from './';

const handleClick = () => console.log('Click!');

storiesOf('Components / Buttons / RoundedChevronButton', module)
  .add('Right', () => (
    <RoundedChevronButton onClick={handleClick} direction="right" />
  ))
  .add('Down', () => (
    <RoundedChevronButton onClick={handleClick} direction="down" />
  ))
  .add('Left', () => (
    <RoundedChevronButton onClick={handleClick} direction="left" />
  ))
  .add('Up', () => (
    <RoundedChevronButton onClick={handleClick} direction="up" />
  ));

// @flow
/* eslint no-console:0 */
import React from 'react';
import { storiesOf } from '@storybook/react';
import LoginButton from './';

const handleClick = () => console.log('Click!');

storiesOf('Components / Buttons / LoginButton', module).add('Base', () => (
  <LoginButton handleClick={handleClick}>Log In</LoginButton>
));

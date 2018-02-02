// @flow
/* eslint no-console: 0 */
import React from 'react';
import { storiesOf } from '@storybook/react';
import FacebookButton from './';

const handleClick = () => console.log('Click!');

storiesOf('Components / Buttons / FacebookButton', module).add(
  'Variations',
  () => (
    <div>
      <p>Without Logo (default):</p>
      <FacebookButton handleClick={handleClick}>
        Sign in with Facebook
      </FacebookButton>
      <p>With Logo:</p>
      <FacebookButton handleClick={handleClick} withIcon>
        With Facebook
      </FacebookButton>
    </div>
  ),
);

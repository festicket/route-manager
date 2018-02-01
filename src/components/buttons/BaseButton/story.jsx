// @flow
/* global alert */
/* eslint no-alert: 0 */

import React from 'react';
import { storiesOf } from '@storybook/react';
import BaseButton from './';

storiesOf('Components / Buttons / BaseButton', module)
  .add('Colour Variations', () => (
    <div>
      <p>Primary Button:</p>
      <BaseButton>Primary Button</BaseButton>
      <p>Secondary Button:</p>
      <BaseButton variant="secondary">Secondary Button</BaseButton>
      <p>Facebook Button:</p>
      <BaseButton variant="facebook">Facebook Style Button</BaseButton>
    </div>
  ))
  .add('With Alert on Callback', () => (
    <BaseButton
      handleClick={() => {
        alert('I am the callback');
      }}
    >
      Button with Callback
    </BaseButton> // eslint-disable-line no-alert
  ))
  .add('Size Variations', () => (
    <div>
      <p>Full-width: Always width: 100%</p>
      <BaseButton size="full_width">Full Width Button</BaseButton>
      <p>Repsonsive: Full-width only on mobile (resize screen)</p>
      <BaseButton>Responsive Button</BaseButton>
    </div>
  ));

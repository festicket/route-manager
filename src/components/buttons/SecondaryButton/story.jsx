// @flow

import React from 'react';
import { storiesOf } from '@storybook/react';
import SecondaryButton from './';

storiesOf('Components / Buttons / SecondaryButton', module)
  .add('Default', () => <SecondaryButton>Button</SecondaryButton>)
  .add('Default White Background', () => (
    <div style={{ backgroundColor: 'white' }}>
      <SecondaryButton>Button</SecondaryButton>
    </div>
  ))
  .add('Default Small', () => (
    <SecondaryButton size="small">Button</SecondaryButton>
  ))
  .add('Default - with isDisabled', () => (
    <div style={{ backgroundColor: 'white' }}>
      <SecondaryButton size="small" element="button" isDisabled>
        Disabled Button
      </SecondaryButton>
    </div>
  ));

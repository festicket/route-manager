// @flow

import React from 'react';
import { storiesOf } from '@storybook/react';
import SecondaryButton from './';

storiesOf('Components / Buttons / SecondaryButton', module)
  .add('Default', () => <SecondaryButton>Button</SecondaryButton>)
  .add('Default Small', () => (
    <SecondaryButton size="small">Button</SecondaryButton>
  ))
  .add('Default Small with isDisabled', () => (
    <div style={{ backgroundColor: 'white' }}>
      <SecondaryButton size="small" element="button" isDisabled>
        Disabled Button
      </SecondaryButton>
    </div>
  ));

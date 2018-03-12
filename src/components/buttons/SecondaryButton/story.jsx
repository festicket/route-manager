// @flow

import React from 'react';
import { storiesOf } from '@storybook/react';

import SecondaryButton from './';

storiesOf('Components / Buttons / SecondaryButton', module)
  .add('Default', () => <SecondaryButton>Button</SecondaryButton>)
  .add('Default with grey background', () => (
    <SecondaryButton>Button</SecondaryButton>
  ))
  .add('Default Small', () => (
    <SecondaryButton size="small">Button</SecondaryButton>
  ))
  .add('Default Small with isDisabled', () => (
    <SecondaryButton size="small" element="button" isDisabled>
      Disabled Button
    </SecondaryButton>
  ))
  .add('Using a render prop', () => (
    <SecondaryButton
      element="button"
      render={() => [
        <span key="cart">Add to cart</span>,
        <span key="thing">Here is a thing</span>,
      ]}
    />
  ));

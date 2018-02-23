// @flow

import React from 'react';
import { storiesOf } from '@storybook/react';
import PrimaryButton from './';

storiesOf('Components / Buttons / PrimaryButton', module)
  .add('Default', () => <PrimaryButton>Button</PrimaryButton>)
  .add('Default Small', () => (
    <PrimaryButton size="small">Button</PrimaryButton>
  ))
  .add('Default inline', () => (
    <PrimaryButton size="inline">Button</PrimaryButton>
  ))
  .add('Bordered', () => (
    <PrimaryButton variant="bordered">Button</PrimaryButton>
  ))
  .add('Bordered Small', () => (
    <PrimaryButton variant="bordered" size="small">
      Button
    </PrimaryButton>
  ))
  .add('Bordered inline', () => (
    <PrimaryButton variant="bordered" size="inline">
      Button
    </PrimaryButton>
  ))
  .add('Transparent', () => (
    <PrimaryButton variant="transparent">Button</PrimaryButton>
  ))
  .add('Transparent Small', () => (
    <PrimaryButton variant="transparent" size="small">
      Button
    </PrimaryButton>
  ))
  .add('Transparent inline', () => (
    <PrimaryButton variant="transparent" size="inline">
      Button
    </PrimaryButton>
  ))
  .add('Button HTML Element', () => (
    <PrimaryButton element="button">Button</PrimaryButton>
  ))
  .add('Disabled variant', () => (
    <PrimaryButton element="button" isDisabled>
      Button
    </PrimaryButton>
  ))
  .add('Using a render prop', () => (
    <PrimaryButton
      element="button"
      render={() => [
        <span key="cart">Add to cart</span>,
        <span key="thing">Here is a thing</span>,
      ]}
    />
  ));

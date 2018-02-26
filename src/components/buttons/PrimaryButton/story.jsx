// @flow

import React from 'react';
import { storiesOf } from '@storybook/react';
import PrimaryButton from './';
import { Background } from '../../../utils/storybook-helpers';

storiesOf('Components / Buttons / PrimaryButton', module)
  .add('Default', () => (
    <Background.White>
      <PrimaryButton>Button</PrimaryButton>
    </Background.White>
  ))
  .add('Default Small', () => (
    <Background.White>
      <PrimaryButton size="small">Button</PrimaryButton>
    </Background.White>
  ))
  .add('Default inline', () => (
    <Background.White>
      <PrimaryButton size="inline">Button</PrimaryButton>
    </Background.White>
  ))
  .add('Bordered', () => (
    <Background.White>
      <PrimaryButton variant="bordered">Button</PrimaryButton>
    </Background.White>
  ))
  .add('Bordered Small', () => (
    <Background.White>
      <PrimaryButton variant="bordered" size="small">
        Button
      </PrimaryButton>
    </Background.White>
  ))
  .add('Bordered inline', () => (
    <Background.White>
      <PrimaryButton variant="bordered" size="inline">
        Button
      </PrimaryButton>
    </Background.White>
  ))
  .add('Transparent', () => (
    <Background.White>
      <PrimaryButton variant="transparent">Button</PrimaryButton>
    </Background.White>
  ))
  .add('Transparent Small', () => (
    <Background.White>
      <PrimaryButton variant="transparent" size="small">
        Button
      </PrimaryButton>
    </Background.White>
  ))
  .add('Transparent inline', () => (
    <Background.White>
      <PrimaryButton variant="transparent" size="inline">
        Button
      </PrimaryButton>
    </Background.White>
  ))
  .add('Button HTML Element', () => (
    <Background.White>
      <PrimaryButton element="button">Button</PrimaryButton>
    </Background.White>
  ))
  .add('Disabled variant', () => (
    <Background.White>
      <PrimaryButton element="button" isDisabled>
        Button
      </PrimaryButton>
    </Background.White>
  ))
  .add('Using a render prop', () => (
    <Background.White>
      <PrimaryButton
        element="button"
        render={() => [
          <span key="cart">Add to cart</span>,
          <span key="thing">Here is a thing</span>,
        ]}
      />
    </Background.White>
  ));

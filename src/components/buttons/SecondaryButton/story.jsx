// @flow

import React from 'react';
import { storiesOf } from '@storybook/react';
import SecondaryButton from './';
import { Background } from '../../../utils/storybook-helpers';

storiesOf('Components / Buttons / SecondaryButton', module)
  .add('Default', () => (
    <Background.White>
      <SecondaryButton>Button</SecondaryButton>
    </Background.White>
  ))
  .add('Default with grey background', () => (
    <Background.Grey>
      <SecondaryButton>Button</SecondaryButton>
    </Background.Grey>
  ))
  .add('Default Small', () => (
    <Background.White>
      <SecondaryButton size="small">Button</SecondaryButton>
    </Background.White>
  ))
  .add('Default Small with isDisabled', () => (
    <Background.White>
      <SecondaryButton size="small" element="button" isDisabled>
        Disabled Button
      </SecondaryButton>
    </Background.White>
  ))
  .add('Using a render prop', () => (
    <Background.White>
      <SecondaryButton
        element="button"
        render={() => [
          <span key="cart">Add to cart</span>,
          <span key="thing">Here is a thing</span>,
        ]}
      />
    </Background.White>
  ));

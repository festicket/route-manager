// @flow

import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, text, boolean, select } from '@storybook/addon-knobs/react';

import SecondaryButton from './';
import { info } from '../storybook-info';
import * as knobs from '../knobs';

storiesOf('Components / Buttons / SecondaryButton', module)
  .addDecorator(withKnobs)
  // $FlowFixMe - FLow doesn't like addWithPercyOptions
  .addWithPercyOptions(
    'Secondary Button Documentation',
    { skip: true },
    withInfo(info)(() => (
      <SecondaryButton
        to={text('to', '#')}
        fullWidth={boolean('fullWidth', false)}
        size={select(...knobs.sizes)}
        element={select(...knobs.elements)}
        fontSize={select(...knobs.fontSizes)}
        isDisabled={boolean('isDisabled', false)}
        onClick={action('Secondary Button - click')}
      >
        {text('children - text content', 'Children')}
      </SecondaryButton>
    )),
  )
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

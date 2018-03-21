// @flow

import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, text, boolean, select } from '@storybook/addon-knobs/react';

import * as knobs from '../knobs';
import PrimaryButton from './';

const info = `
- Uses the \`children\` prop as the content of the button.
- **Important** - if using with \`element="button"\`, the child content cannot contain \`divs\` 
as this is [not valid HTML](https://stackoverflow.com/a/12982334).      
`;

storiesOf('Components / Buttons / PrimaryButton', module)
  .addDecorator(withKnobs)
  // $FlowFixMe
  .addWithPercyOptions(
    'Primary Button Documentation',
    { skip: true },
    withInfo(info)(() => (
      <PrimaryButton
        to={text('to', '#')}
        fullWidth={boolean('fullWidth', false)}
        size={select(...knobs.sizes)}
        variant={select(...knobs.variants)}
        element={select(...knobs.elements)}
        fontSize={select(...knobs.fontSizes)}
        isDisabled={boolean('isDisabled', false)}
        onClick={action('Regular Primary Button - click')}
      >
        {text('children - text content', 'Children')}
      </PrimaryButton>
    )),
  )
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
  .add('Button HTML Element Small', () => (
    <PrimaryButton element="button" size="small">
      Button
    </PrimaryButton>
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

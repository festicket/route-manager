// @flow

import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean, select } from '@storybook/addon-knobs/react';
import { variant, size, fontSize, element } from '../knobs';

import SecondaryButton from './';

storiesOf('Components / Buttons / SecondaryButton', module)
  .addDecorator(withKnobs)
  .add('Button with Children', () => (
    <SecondaryButton
      to={text('to', '#')}
      fullWidth={boolean('fullWidth', false)}
      size={select(...size)}
      variant={select(...variant)}
      element={select(...element)}
      fontSize={select(...fontSize)}
      isDisabled={boolean('isDisabled', false)}
      onClick={action('Button with Children-click')}
    >
      {text('children - text content', 'Children')}
    </SecondaryButton>
  ))
  .add('Button with Render Props', () => (
    <SecondaryButton
      to={text('to', '#')}
      fullWidth={boolean('fullWidth', false)}
      size={select(...size)}
      variant={select(...variant)}
      element={select(...element)}
      fontSize={select(...fontSize)}
      isDisabled={boolean('isDisabled', false)}
      render={() => <div>{text('render - text content', 'Render Props')}</div>}
      onClick={action('Button with Render Props-click')}
    />
  ));

// @flow

import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean, select } from '@storybook/addon-knobs/react';
import { Background } from 'src/utils/storybook-helpers';
import { variant, size, fontSize, element } from '../knobs';

import PrimaryButton from './';

storiesOf('Components / Buttons / PrimaryButton', module)
  .addDecorator(withKnobs)
  .add('Button with Children', () => (
    <Background.White>
      <PrimaryButton
        to={text('to', '#')}
        fullWidth={boolean('fullWidth', false)}
        size={select(...size)}
        variant={select(...variant)}
        element={select(...element)}
        fontSize={select(...fontSize)}
        isDisabled={boolean('isDisabled', false)}
      >
        {text('children - text content', 'Children')}
      </PrimaryButton>
    </Background.White>
  ))
  .add('Button with Render Props', () => (
    <Background.White>
      <PrimaryButton
        to={text('to', '#')}
        fullWidth={boolean('fullWidth', false)}
        size={select(...size)}
        variant={select(...variant)}
        element={select(...element)}
        fontSize={select(...fontSize)}
        isDisabled={boolean('isDisabled', false)}
        render={() => (
          <div>{text('render - text content', 'Render Props')}</div>
        )}
      />
    </Background.White>
  ));

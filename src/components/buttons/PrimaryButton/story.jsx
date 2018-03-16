// @flow

import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withNotes } from '@storybook/addon-notes';
import { withKnobs, text, boolean, select } from '@storybook/addon-knobs/react';
import { variant, size, fontSize, element } from './knobs';

import PrimaryButton from './';

storiesOf('Components / Buttons / PrimaryButton', module)
  .addDecorator((story, context) => withInfo('common info')(story)(context))
  .addDecorator(withKnobs)
  .add(
    'Button with Children',
    withNotes('Button with Children notes')(() => (
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
    )),
  )
  .add(
    'Button with Render Props',
    withNotes('Button with Render Props notes')(() => (
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
    )),
  );

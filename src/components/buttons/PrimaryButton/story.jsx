// @flow

import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, text, boolean, select } from '@storybook/addon-knobs/react';

import { variant, size, fontSize, element } from '../knobs';
import PrimaryButton from './';

const info = `
- Uses the \`children\` prop as the content of the button.
- **Important** - if using with \`element="button"\`, the child content cannot contain \`divs\` 
as this is [not valid HTML](https://stackoverflow.com/a/12982334).      
`;

storiesOf('Components / Buttons / PrimaryButton', module)
  .addDecorator(withKnobs)
  .add(
    'Regular Primary Button',
    withInfo(info)(() => (
      <PrimaryButton
        to={text('to', '#')}
        fullWidth={boolean('fullWidth', false)}
        size={select(...size)}
        variant="regular"
        element={select(...element)}
        fontSize={select(...fontSize)}
        isDisabled={boolean('isDisabled', false)}
        onClick={action('Regular Primary Button - click')}
      >
        {text('children - text content', 'Children')}
      </PrimaryButton>
    )),
  )
  .add(
    'Bordered Primary Button',
    withInfo(info)(() => (
      <PrimaryButton
        to={text('to', '#')}
        fullWidth={boolean('fullWidth', false)}
        size={select(...size)}
        variant="bordered"
        element={select(...element)}
        fontSize={select(...fontSize)}
        isDisabled={boolean('isDisabled', false)}
        onClick={action('Bordered Primary Button - click')}
      >
        {text('children - text content', 'Children')}
      </PrimaryButton>
    )),
  )
  .add(
    'Transparent Primary Button',
    withInfo(info)(() => (
      <PrimaryButton
        to={text('to', '#')}
        fullWidth={boolean('fullWidth', false)}
        size={select(...size)}
        variant="transparent"
        element={select(...element)}
        fontSize={select(...fontSize)}
        isDisabled={boolean('isDisabled', false)}
        onClick={action('Transparent Primary Button - click')}
      >
        {text('children - text content', 'Children')}
      </PrimaryButton>
    )),
  )

  .add(
    'Primary Button with Render Props - Deprecated',
    withInfo({
      text: `
      # Deprecated
      Button with Render Props uses the \`render\` prop as the content of the button.
      Will override \`children\` if both are provided.`,
    })(() => (
      <PrimaryButton
        to={text('to', '#')}
        fullWidth={boolean('fullWidth', false)}
        size={select(...size)}
        variant={select(...variant)}
        element={select(...element)}
        fontSize={select(...fontSize)}
        isDisabled={boolean('isDisabled', false)}
        // The next line can be done by passing 2 spans as children - hence deprecation
        render={() => [
          <span key={1}>{text('render - span1', 'Render')}</span>,
          <span key={2}>{text('render - span2', 'Props')}</span>,
        ]}
        onClick={action('Button with Render Props - click')}
      />
    )),
  );

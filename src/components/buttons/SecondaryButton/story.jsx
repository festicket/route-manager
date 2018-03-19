// @flow

import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, text, boolean, select } from '@storybook/addon-knobs/react';
import { variant, size, fontSize, element } from '../knobs';

import SecondaryButton from './';

storiesOf('Components / Buttons / SecondaryButton', module)
  .addDecorator(withKnobs)
  .add(
    'Button with Children',
    withInfo(`
      Button with Children uses the \`children\` prop as the content of the button. 
    
      ~~~js
      <SecondaryButton>Click Here</SecondaryButton>
      ~~~
    
    `)(() => (
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
    )),
  )
  .add(
    'Button with Render Props - Deprecated',
    withInfo({
      text: `
      # Deprecated
      Button with Render Props uses the \`render\` prop as the content of the button.
      Will override \`children\` if both are provided. 
    
      ~~~js
      <SecondaryButton>Click Here</SecondaryButton>
      ~~~
    
    `,
    })(() => (
      <SecondaryButton
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
        onClick={action('Button with Render Props-click')}
      />
    )),
  );

// @flow

import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, text, boolean, select } from '@storybook/addon-knobs/react';

import { variant, size, fontSize, element } from '../knobs';
import SecondaryButton from './';

const info = `
- Uses the \`children\` prop as the content of the button.
- **Important** - if using with \`element="button"\`, the child content cannot contain \`divs\` as this is [not valid HTML](https://stackoverflow.com/a/12982334).      
`;

storiesOf('Components / Buttons / SecondaryButton', module)
  .addDecorator(withKnobs)
  .add(
    'Secondary Button',
    withInfo(info)(() => (
      <SecondaryButton
        to={text('to', '#')}
        fullWidth={boolean('fullWidth', false)}
        size={select(...size)}
        element={select(...element)}
        fontSize={select(...fontSize)}
        isDisabled={boolean('isDisabled', false)}
        onClick={action('Secondary Button - click')}
      >
        {text('children - text content', 'Children')}
      </SecondaryButton>
    )),
  )
  .add(
    'Secondary Button with Render Props - Deprecated',
    withInfo({
      text: `
      # Deprecated
      Button with Render Props uses the \`render\` prop as the content of the button.
      Will override \`children\` if both are provided.     
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
        onClick={action('Secondary Button with Render Props - click')}
      />
    )),
  );

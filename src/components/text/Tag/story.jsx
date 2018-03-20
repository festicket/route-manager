// @flow

import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, select } from '@storybook/addon-knobs/react';
import Tag from './';

export const variant = [
  'variant',
  {
    default: 'default',
    bordered: 'bordered',
    grey: 'grey',
    red: 'red',
  },
  'default',
];

storiesOf('Components / Text / Tag', module)
  .addDecorator(withKnobs)
  .add('default', () => (
    <Tag variant={select(...variant)}>
      {text('children - text content', 'Tag component')}
    </Tag>
  ))
  .add('default h3', () => <Tag element="h3">Big stage</Tag>)
  .add('bordered', () => (
    <div>
      <Tag variant="bordered">Coming soon</Tag>
      &nbsp;
      <Tag variant="bordered">Sold out</Tag>
    </div>
  ))
  .add('grey', () => (
    <div>
      <Tag variant="grey">Ends Soon</Tag>
    </div>
  ))
  .add('red', () => (
    <div>
      <Tag variant="red">In High Demand</Tag>
      &nbsp;
      <Tag variant="red">Almost Sold Out</Tag>
    </div>
  ));

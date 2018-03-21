// @flow

import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, select } from '@storybook/addon-knobs/react';
import Tag from './';

storiesOf('Components / Text / Tag', module)
  .addDecorator(withKnobs)
  // $FlowFixMe - Flow doesn't like addWithPercyOptions
  .addWithPercyOptions('Tag Documentation', { skip: true }, () => (
    <Tag
      variant={select('variant', ['theme', 'white', 'grey', 'red'], 'theme')}
    >
      {text('children - text content', 'Tag component')}
    </Tag>
  ))
  .add('theme - with h3 element', () => (
    <Tag variant="theme" element="h3">
      Big stage
    </Tag>
  ))
  .add('white - 2 side by side', () => (
    <div>
      <Tag variant="white">Coming soon</Tag>
      &nbsp;
      <Tag variant="white">Sold out</Tag>
    </div>
  ))
  .add('grey', () => (
    <div>
      <Tag variant="grey">Ends Soon</Tag>
    </div>
  ))
  .add('red - with spans as children', () => (
    <div>
      <Tag variant="red">
        <span>In High Demand</span>
      </Tag>
      &nbsp;
      <Tag variant="red">
        <span>Almost</span> <span>Sold Out</span>
      </Tag>
    </div>
  ));

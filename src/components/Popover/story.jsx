// @flow

import React from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered';

import Popover from './';

const popoverContent = close => (
  <div data-cy="popover-content">
    <p>Hello!</p>
    <p>
      <button onClick={close}>Close</button>
    </p>
  </div>
);

storiesOf('Components / Popover', module)
  .addDecorator(centered)
  .add('Left-aligned', () => (
    <Popover render={popoverContent}>
      <button data-cy="toggle" style={{ fontSize: '1.5em' }}>
        Toggle Popover
      </button>
    </Popover>
  ))
  .add('Right-aligned', () => (
    <Popover horizontalAlign="right" render={popoverContent}>
      <button data-cy="toggle" style={{ fontSize: '1.5em' }}>
        Toggle Popover
      </button>
    </Popover>
  ))
  .add('Left-aligned initially shown', () => (
    <Popover showInitially render={popoverContent}>
      <button data-cy="toggle" style={{ fontSize: '1.5em' }}>
        Toggle Popover
      </button>
    </Popover>
  ))
  .add('Right-aligned initially shown', () => (
    <Popover showInitially horizontalAlign="right" render={popoverContent}>
      <button data-cy="toggle" style={{ fontSize: '1.5em' }}>
        Toggle Popover
      </button>
    </Popover>
  ));

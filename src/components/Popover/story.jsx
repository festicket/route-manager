// @flow

import React from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered';
import { Background } from 'src/utils/storybook-helpers';

import Popover from './';

const popoverContent = close => (
  <div data-test-popover-content="true">
    <p>Hello!</p>
    <p>
      <button onClick={close}>Close</button>
    </p>
  </div>
);

storiesOf('Components / Popover', module)
  .addDecorator(centered)
  .add('Left-aligned', () => (
    <Background.White>
      <Popover render={popoverContent}>
        <button id="toggle" data-cy="toggle" style={{ fontSize: '1.5em' }}>
          Toggle Popover
        </button>
      </Popover>
    </Background.White>
  ))
  .add('Right-aligned', () => (
    <Background.White>
      <Popover horizontalAlign="right" render={popoverContent}>
        <button id="toggle" data-cy="toggle" style={{ fontSize: '1.5em' }}>
          Toggle Popover
        </button>
      </Popover>
    </Background.White>
  ))
  .add('Left-aligned initially shown', () => (
    <Background.White>
      <Popover showInitially render={popoverContent}>
        <button id="toggle" data-cy="toggle" style={{ fontSize: '1.5em' }}>
          Toggle Popover
        </button>
      </Popover>
    </Background.White>
  ))
  .add('Right-aligned initially shown', () => (
    <Background.White>
      <Popover showInitially horizontalAlign="right" render={popoverContent}>
        <button id="toggle" data-cy="toggle" style={{ fontSize: '1.5em' }}>
          Toggle Popover
        </button>
      </Popover>
    </Background.White>
  ));

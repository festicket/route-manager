// @flow

import React from 'react';
import { storiesOf } from '@storybook/react';
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

const CenteredBackground = Background.White.extend`
  text-align: center;
`;

storiesOf('Components / Popover', module)
  .add('Left-aligned', () => (
    <CenteredBackground>
      <Popover render={popoverContent}>
        <button id="toggle" style={{ fontSize: '1.5em' }}>
          Toggle Popover
        </button>
      </Popover>
    </CenteredBackground>
  ))
  .add('Right-aligned', () => (
    <CenteredBackground>
      <Popover horizontalAlign="right" render={popoverContent}>
        <button id="toggle" style={{ fontSize: '1.5em' }}>
          Toggle Popover
        </button>
      </Popover>
    </CenteredBackground>
  ))
  .add('Left-aligned initially shown', () => (
    <CenteredBackground>
      <Popover showInitially render={popoverContent}>
        <button id="toggle" style={{ fontSize: '1.5em' }}>
          Toggle Popover
        </button>
      </Popover>
    </CenteredBackground>
  ))
  .add('Right-aligned initially shown', () => (
    <CenteredBackground>
      <Popover showInitially horizontalAlign="right" render={popoverContent}>
        <button id="toggle" style={{ fontSize: '1.5em' }}>
          Toggle Popover
        </button>
      </Popover>
    </CenteredBackground>
  ));

// @flow

import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';

import Popover from './';

const popoverContent = close => (
  <div data-test-popover-content="true">
    <p>Hello!</p>
    <p>
      <button onClick={close}>Close</button>
    </p>
  </div>
);

const CenteredBackground = styled.div`
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

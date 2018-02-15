// @flow

import React from 'react';
import { storiesOf } from '@storybook/react';
import Popover from './';
import { Background } from '../../utils/storybook-helpers';

const popoverContent = close => (
  <div>
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
        <button id="toggle">Toggle Popover</button>
      </Popover>
    </CenteredBackground>
  ))
  .add('Right-aligned', () => (
    <CenteredBackground>
      <Popover horizontalAlign="right" render={popoverContent}>
        <button id="toggle">Toggle Popover</button>
      </Popover>
    </CenteredBackground>
  ));

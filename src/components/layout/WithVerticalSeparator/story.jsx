// @flow

import * as React from 'react';
import { storiesOf } from '@storybook/react';

import { Background, CenteredFlexRow } from '../../../utils/storybook-helpers';
import WithVerticalSeparator from './';

storiesOf('Components / Layout / WithVerticalSeparator', module).add(
  'default',
  () => (
    <Background.White>
      <CenteredFlexRow>
        <WithVerticalSeparator>
          <span>Left</span>
        </WithVerticalSeparator>
        <span>Right</span>
      </CenteredFlexRow>
    </Background.White>
  ),
);

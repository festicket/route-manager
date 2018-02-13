// @flow

import * as React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import WithVerticalSeparator from './';

const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

storiesOf('Components / Layout / WithVerticalSeparator', module).add(
  'default',
  () => (
    <Row>
      <WithVerticalSeparator>
        <span>Left</span>
      </WithVerticalSeparator>
      <span>Right</span>
    </Row>
  ),
);

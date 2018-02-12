// @flow

import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import VerticalSeparator from './';

const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

storiesOf('Components / Layout / VerticalSeparator', module).add(
  'default',
  () => (
    <Row>
      <span>Left</span>
      <VerticalSeparator />
      <span>Right</span>
    </Row>
  ),
);

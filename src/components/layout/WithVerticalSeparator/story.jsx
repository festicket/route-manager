// @flow

import * as React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';

import CenteredFlexRow from 'src/utils/storybook-helpers/CenteredFlexRow';

import WithVerticalSeparator from './';

const UnorderedHorizonalList = styled.ul`
  list-style: none;
  li {
    display: inline;
  }
`;

storiesOf('Components / Layout / WithVerticalSeparator', module)
  .addDecorator(CenteredFlexRow)
  .add('default', () => (
    <UnorderedHorizonalList>
      <WithVerticalSeparator>
        <li>First</li>
      </WithVerticalSeparator>
      <WithVerticalSeparator>
        <li>Second</li>
      </WithVerticalSeparator>
      <li>Third</li>
    </UnorderedHorizonalList>
  ));

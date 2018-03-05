// @flow

import * as React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';

import CenteredFlexRow from 'src/utils/storybook-helpers/CenteredFlexRow';
import Background from 'src/utils/storybook-helpers/BackgroundColor';

import WithVerticalSeparator from './';

const UnorderedHorizonalList = styled.ul`
  list-style: none;
  li {
    display: inline;
  }
`;

storiesOf('Components / Layout / WithVerticalSeparator', module)
  .addDecorator(CenteredFlexRow)
  .addDecorator(Background.White)
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

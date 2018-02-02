// @flow

import React from 'react';
import { storiesOf } from '@storybook/react';
import RoundedChevronButton from './';

storiesOf('Components / Buttons / RoundedChevronButton', module)
  .add('Right', () => <RoundedChevronButton direction="right" />)
  .add('Down', () => <RoundedChevronButton direction="down" />)
  .add('Left', () => <RoundedChevronButton direction="left" />)
  .add('Up', () => <RoundedChevronButton direction="up" />);

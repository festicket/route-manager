// @flow

import React from 'react';
import { storiesOf } from '@storybook/react';
import styled from 'styled-components';
import SlantedBackground from './';
import Wrapper from '../Wrapper';

const Box = styled.div`
  background: yellow;
  padding: 2em;
  min-height: 40em;
  border: 2px solid red;
`;

storiesOf('Components / Layout / SlantedBackground', module)
  .add('With primary slantVariant', () => (
    <SlantedBackground slantVariant="primary">
      <Wrapper size="alternative">
        <Box>This is some content.</Box>
      </Wrapper>
    </SlantedBackground>
  ))
  .add('With primary slantVariant and slantVerticalOffset', () => (
    <SlantedBackground slantVariant="primary" slantVerticalOffset>
      <Wrapper size="alternative">
        <Box>This is some content.</Box>
      </Wrapper>
    </SlantedBackground>
  ))
  .add('Multiple slanted backgrounds', () => (
    <div>
      <Wrapper size="alternative">
        <Box>No slant</Box>
      </Wrapper>
      <SlantedBackground
        backgroundVariant="grey"
        slantVariant="white"
        slantHorizontalDirection="to-right"
      >
        <Wrapper size="alternative">
          <Box>Grey background variant, white to-right slant</Box>
        </Wrapper>
      </SlantedBackground>
      <SlantedBackground
        backgroundVariant="primary"
        slantVariant="grey"
        slantVerticalOffset
        slantHorizontalDirection="to-left"
      >
        <Wrapper size="alternative">
          <Box>Primary background variant, grey to-left slant with offset</Box>
        </Wrapper>
      </SlantedBackground>
      <SlantedBackground
        slantVariant="primary"
        slantVerticalOffset
        slantHorizontalDirection="to-right"
      >
        <Wrapper size="alternative">
          <Box>No background variant, primary to-right slant with offset</Box>
        </Wrapper>
      </SlantedBackground>
    </div>
  ));

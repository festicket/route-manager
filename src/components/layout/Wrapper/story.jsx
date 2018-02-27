// @flow

import React from 'react';
import { storiesOf } from '@storybook/react';
import styled from 'styled-components';
import Wrapper from './';

const Box = styled.div`
  background: yellow;
  padding: 2em;
  min-height: 40em;
  border: 2px solid red;
`;

storiesOf('Components / Layout / Wrapper', module)
  .add('Normal size', () => (
    <Wrapper size="normal">
      <div>This is some content.</div>
    </Wrapper>
  ))
  .add('Alternative size', () => (
    <Wrapper size="alternative">
      <div>This is some content.</div>
    </Wrapper>
  ))
  .add('Full size', () => (
    <Wrapper size="full">
      <div>This is some content.</div>
    </Wrapper>
  ))
  .add('Multiple wrappers', () => (
    <div>
      <Wrapper size="alternative">
        <Box>No slant</Box>
      </Wrapper>
      <Wrapper
        size="alternative"
        backgroundVariant="grey"
        slantVariant="white"
        slantHorizontalDirection="to-right"
      >
        <Box>Grey background variant, white to-right slant</Box>
      </Wrapper>
      <Wrapper
        size="alternative"
        backgroundVariant="primary"
        slantVariant="grey"
        slantVerticalOffset
        slantHorizontalDirection="to-left"
      >
        <Box>Primary background variant, grey to-left slant with offset</Box>
      </Wrapper>
      <Wrapper
        size="alternative"
        slantVariant="primary"
        slantVerticalOffset
        slantHorizontalDirection="to-right"
      >
        <Box>No background variant, primary to-right slant with offset</Box>
      </Wrapper>
    </div>
  ));

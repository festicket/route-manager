// @flow

import React from 'react';
import { storiesOf } from '@storybook/react';
import styled from 'styled-components';
import SlantedBackground from './';
import Wrapper from '../Wrapper';
import Section from '../Section';
import Box from '../Box';

const ContentPlaceholder = styled.div`
  background: yellow;
  padding: 2em;
  min-height: 40em;
  border: 2px solid red;
`;

storiesOf('Components / Layout / SlantedBackground', module)
  .add('With primary slantVariant', () => (
    <SlantedBackground slantVariant="primary">
      <Wrapper size="alternative">
        <Section>
          <Box>
            <ContentPlaceholder>This is some content.</ContentPlaceholder>
          </Box>
        </Section>
      </Wrapper>
    </SlantedBackground>
  ))
  .add('With primary slantVariant and slantVerticalOffset', () => (
    <SlantedBackground slantVariant="primary" slantVerticalOffset>
      <Wrapper size="alternative">
        <Section>
          <Box>
            <ContentPlaceholder>This is some content.</ContentPlaceholder>
          </Box>
        </Section>
      </Wrapper>
    </SlantedBackground>
  ))
  .add('Multiple slanted backgrounds', () => (
    <div>
      <Wrapper size="alternative">
        <Section>
          <Box>
            <ContentPlaceholder>No slant</ContentPlaceholder>
          </Box>
        </Section>
      </Wrapper>
      <SlantedBackground
        backgroundVariant="grey"
        slantVariant="white"
        slantHorizontalDirection="to-right"
      >
        <Wrapper size="alternative">
          <Section>
            <Box>
              <ContentPlaceholder>
                Grey background variant, white to-right slant
              </ContentPlaceholder>
            </Box>
          </Section>
        </Wrapper>
      </SlantedBackground>
      <SlantedBackground
        backgroundVariant="primary"
        slantVariant="grey"
        slantVerticalOffset
        slantHorizontalDirection="to-left"
      >
        <Wrapper size="alternative">
          <Section>
            <Box>
              <ContentPlaceholder>
                Primary background variant, grey to-left slant with offset
              </ContentPlaceholder>
            </Box>
          </Section>
        </Wrapper>
      </SlantedBackground>
      <SlantedBackground
        slantVariant="primary"
        slantVerticalOffset
        slantHorizontalDirection="to-right"
      >
        <Wrapper size="alternative">
          <Section>
            <Box>
              <ContentPlaceholder>
                No background variant, primary to-right slant with offset
              </ContentPlaceholder>
            </Box>
          </Section>
        </Wrapper>
      </SlantedBackground>
    </div>
  ));

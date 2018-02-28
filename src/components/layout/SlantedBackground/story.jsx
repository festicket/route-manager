// @flow

import React from 'react';
import { storiesOf } from '@storybook/react';

import SlantedBackground from './';
import Wrapper from '../Wrapper';
import Section from '../Section';
import Box from '../Box';
import { TallContentPlaceholder } from '../../../utils/storybook-helpers';

storiesOf('Components / Layout / SlantedBackground', module)
  .add('With primary slantVariant', () => (
    <SlantedBackground slantVariant="primary">
      <Wrapper size="alternative">
        <Section>
          <Box>
            <TallContentPlaceholder>
              This is some content.
            </TallContentPlaceholder>
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
            <TallContentPlaceholder>
              This is some content.
            </TallContentPlaceholder>
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
            <TallContentPlaceholder>No slant</TallContentPlaceholder>
          </Box>
        </Section>
      </Wrapper>
      <SlantedBackground
        backgroundVariant="grey"
        slantVariant="white"
        slantHorizontalDirection="to-right"
        contentVerticalOffset
      >
        <Wrapper size="alternative">
          <Section>
            <Box>
              <TallContentPlaceholder>
                Grey background variant, white to-right slant, with content
                offset
              </TallContentPlaceholder>
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
              <TallContentPlaceholder>
                Primary background variant, grey to-left slant, with slant
                offset
              </TallContentPlaceholder>
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
              <TallContentPlaceholder>
                No background variant, primary to-right slant, with slant offset
              </TallContentPlaceholder>
            </Box>
          </Section>
        </Wrapper>
      </SlantedBackground>
    </div>
  ));

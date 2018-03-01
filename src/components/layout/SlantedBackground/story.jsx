// @flow

import React from 'react';
import { storiesOf } from '@storybook/react';

import SlantedBackground from './';
import Wrapper from '../Wrapper';
import Section from '../Section';
import Gutter from '../Gutter';
import { TallContentPlaceholder } from '../../../utils/storybook-helpers';

storiesOf('Components / Layout / SlantedBackground', module)
  .add('With primary slantVariant', () => (
    <SlantedBackground slantVariant="primary">
      <Wrapper size="alternative">
        <Section>
          <Gutter>
            <TallContentPlaceholder>
              This is some content.
            </TallContentPlaceholder>
          </Gutter>
        </Section>
      </Wrapper>
    </SlantedBackground>
  ))
  .add('With primary slantVariant and slantVerticalOffset', () => (
    <SlantedBackground slantVariant="primary" slantVerticalOffset>
      <Wrapper size="alternative">
        <Section>
          <Gutter>
            <TallContentPlaceholder>
              This is some content.
            </TallContentPlaceholder>
          </Gutter>
        </Section>
      </Wrapper>
    </SlantedBackground>
  ))
  .add('Multiple slanted backgrounds', () => (
    <div>
      <Wrapper size="alternative">
        <Section>
          <Gutter>
            <TallContentPlaceholder>No slant</TallContentPlaceholder>
          </Gutter>
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
            <Gutter>
              <TallContentPlaceholder>
                Grey background variant, white to-right slant, with content
                offset
              </TallContentPlaceholder>
            </Gutter>
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
            <Gutter>
              <TallContentPlaceholder>
                Primary background variant, grey to-left slant, with slant
                offset
              </TallContentPlaceholder>
            </Gutter>
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
            <Gutter>
              <TallContentPlaceholder>
                No background variant, primary to-right slant, with slant offset
              </TallContentPlaceholder>
            </Gutter>
          </Section>
        </Wrapper>
      </SlantedBackground>
    </div>
  ));

// @flow

import React from 'react';
import { storiesOf } from '@storybook/react';
import { TallContentPlaceholder } from 'src/utils/storybook-helpers';

import SlantedBackground from './';
import Container from '../Container';
import Section from '../Section';
import Gutter from '../Gutter';

storiesOf('Components / Layout / SlantedBackground', module)
  .add('With primary slantVariant', () => (
    <SlantedBackground slantVariant="primary">
      <Container size="alternative">
        <Section>
          <Gutter>
            <TallContentPlaceholder>
              This is some content.
            </TallContentPlaceholder>
          </Gutter>
        </Section>
      </Container>
    </SlantedBackground>
  ))
  .add('With primary slantVariant and slantVerticalOffset', () => (
    <SlantedBackground slantVariant="primary" slantVerticalOffset>
      <Container size="alternative">
        <Section>
          <Gutter>
            <TallContentPlaceholder>
              This is some content.
            </TallContentPlaceholder>
          </Gutter>
        </Section>
      </Container>
    </SlantedBackground>
  ))
  .add('Multiple slanted backgrounds', () => (
    <div>
      <Container size="alternative">
        <Section>
          <Gutter>
            <TallContentPlaceholder>No slant</TallContentPlaceholder>
          </Gutter>
        </Section>
      </Container>
      <SlantedBackground
        backgroundVariant="grey"
        slantVariant="white"
        slantHorizontalDirection="to-right"
        contentVerticalOffset
      >
        <Container size="alternative">
          <Section>
            <Gutter>
              <TallContentPlaceholder>
                Grey background variant, white to-right slant, with content
                offset
              </TallContentPlaceholder>
            </Gutter>
          </Section>
        </Container>
      </SlantedBackground>
      <SlantedBackground
        backgroundVariant="primary"
        slantVariant="grey"
        slantVerticalOffset
        slantHorizontalDirection="to-left"
      >
        <Container size="alternative">
          <Section>
            <Gutter>
              <TallContentPlaceholder>
                Primary background variant, grey to-left slant, with slant
                offset
              </TallContentPlaceholder>
            </Gutter>
          </Section>
        </Container>
      </SlantedBackground>
      <SlantedBackground
        slantVariant="primary"
        slantVerticalOffset
        slantHorizontalDirection="to-right"
      >
        <Container size="alternative">
          <Section>
            <Gutter>
              <TallContentPlaceholder>
                No background variant, primary to-right slant, with slant offset
              </TallContentPlaceholder>
            </Gutter>
          </Section>
        </Container>
      </SlantedBackground>
    </div>
  ));

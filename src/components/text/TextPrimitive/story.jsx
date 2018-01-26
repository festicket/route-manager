import React from 'react';
import { storiesOf } from '@storybook/react';
import { TextPrimitive } from './';

storiesOf('Components / text / TextPrimitive', module)
  .add('H1 variations', () => (
    <div>
      <TextPrimitive element="h1" variant="h1" weight="bold">
        I am the default H1 TextPrimitive primitive.
      </TextPrimitive>
      <div style={{ backgroundColor: '#242529' }}>
        <TextPrimitive element="h1" variant="h1" color="white" weight="bold">
          I am an H1 TextPrimitive primitive
        </TextPrimitive>
      </div>
    </div>
  ))
  .add('H2 variations', () => (
    <div>
      <TextPrimitive element="h2" variant="h2" weight="bold">
        I am the regular H2 TextPrimitive primitive.
      </TextPrimitive>

      <TextPrimitive element="h2" variant="h2" weight="light">
        I am the light H2 TextPrimitive primitive.
      </TextPrimitive>

      <div style={{ backgroundColor: '#242529' }}>
        <TextPrimitive element="h2" variant="h2" color="white" weight="bold">
          I am an H2 TextPrimitive primitive.
        </TextPrimitive>
      </div>
    </div>
  ))
  .add('H3 variations', () => (
    <div>
      <TextPrimitive element="h3" variant="h3" weight="bold">
        I am the default H3 TextPrimitive primitive.
      </TextPrimitive>

      <TextPrimitive element="h3" variant="h3" weight="light">
        I am the light H3 TextPrimitive primitive.
      </TextPrimitive>

      <div style={{ backgroundColor: '#242529' }}>
        <TextPrimitive element="h3" variant="h3" color="white" weight="bold">
          I am an H3 TextPrimitive primitive.
        </TextPrimitive>
      </div>
    </div>
  ))
  .add('Body TextPrimitive - Paragraph light weight', () => (
    <div>
      <TextPrimitive element="p" variant="p" weight="light">
        I am a paragraph TextPrimitive primitive.
      </TextPrimitive>
      <TextPrimitive element="p" variant="p" size="small" weight="light">
        I am a paragraph TextPrimitive primitive.
      </TextPrimitive>
      <TextPrimitive element="p" variant="p" size="tiny" weight="light">
        I am a paragraph TextPrimitive primitive.
      </TextPrimitive>
    </div>
  ))
  .add('Highlight TextPrimitive - Paragraph regular weight', () => (
    <div>
      <TextPrimitive element="p" variant="p" weight="regular">
        Highlight TextPrimitive primitive.
      </TextPrimitive>
      <TextPrimitive element="p" variant="p" size="small" weight="regular">
        Highlight TextPrimitive primitive.
      </TextPrimitive>
      <TextPrimitive element="p" variant="p" size="tiny" weight="regular">
        Highlight TextPrimitive primitive.
      </TextPrimitive>
    </div>
  ))
  .add(
    'Hyperlink TextPrimitive - Paragraph regular weight with underline prop',
    () => (
      <div>
        <TextPrimitive element="p" variant="p" weight="regular" underline>
          Hyperlink TextPrimitive primitive.
        </TextPrimitive>
        <TextPrimitive
          element="p"
          variant="p"
          size="small"
          weight="regular"
          underline
        >
          Hyperlink TextPrimitive primitive.
        </TextPrimitive>
        <TextPrimitive
          element="p"
          variant="p"
          size="tiny"
          weight="regular"
          underline
        >
          Hyperlink TextPrimitive primitive.
        </TextPrimitive>
      </div>
    ),
  );

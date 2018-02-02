// @flow

import React, { type Node } from 'react';

import { TextPrimitive } from '../TextPrimitive/';

SecondaryHeading.defaultProps = {
  element: 'h2',
  color: 'black',
  weight: 'bold',
  spacing: 'none',
};

type SecondaryHeadingProps = {
  element?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6',
  children: Node | string,
  color?: 'black' | 'white',
  weight?: 'bold' | 'light',
  spacing?: 'xl' | 'lg' | 'md' | 'sm' | 'tiny' | 'none' | 'default',
};

export default function SecondaryHeading({
  element,
  children,
  color,
  weight,
  spacing,
}: SecondaryHeadingProps) {
  return (
    <TextPrimitive
      element={element}
      variant="h2"
      weight={weight}
      color={color}
      spacing={spacing}
    >
      {children}
    </TextPrimitive>
  );
}

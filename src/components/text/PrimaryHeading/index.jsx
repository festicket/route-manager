// @flow

import React, { type Node } from 'react';

import { TextPrimitive } from '../TextPrimitive/';

PrimaryHeading.defaultProps = {
  element: 'h1',
  color: 'black',
  spacing: 'none',
};

type PrimaryHeadingProps = {
  element?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6',
  children: Node | string,
  color?: 'black' | 'white',
  spacing?: 'xl' | 'lg' | 'md' | 'sm' | 'tiny' | 'none' | 'default',
};

export default function PrimaryHeading({
  element,
  children,
  color,
  spacing,
}: PrimaryHeadingProps) {
  return (
    <TextPrimitive
      element={element}
      variant="h1"
      weight="bold"
      color={color}
      spacing={spacing}
    >
      {children}
    </TextPrimitive>
  );
}

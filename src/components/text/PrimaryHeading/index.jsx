import React, { type Node } from 'react';

import { TextPrimitive } from '../TextPrimitive/';

PrimaryHeading.defaultProps = {
  element: 'h1',
  color: 'black',
};

type PrimaryHeadingProps = {
  element?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6',
  children: Node | string,
  color?: 'black' | 'white',
};

export default function PrimaryHeading({
  element,
  children,
  color,
}: PrimaryHeadingProps) {
  return (
    <TextPrimitive element={element} variant="h1" weight="bold" color={color}>
      {children}
    </TextPrimitive>
  );
}

import React, { type Node } from 'react';

import { TextPrimitive } from '../TextPrimitive/';

SecondaryHeading.defaultProps = {
  element: 'h2',
  color: 'black',
  weight: 'bold',
};

type SecondaryHeadingProps = {
  element?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6',
  children: Node | string,
  color?: 'black' | 'white',
  weight?: 'bold' | 'light',
};

export default function SecondaryHeading({
  element,
  children,
  color,
  weight,
}: SecondaryHeadingProps) {
  return (
    <TextPrimitive element={element} variant="h2" weight={weight} color={color}>
      {children}
    </TextPrimitive>
  );
}

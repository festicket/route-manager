import React, { type Node } from 'react';

import { TextPrimitive } from '../TextPrimitive/';

TertiaryHeading.defaultProps = {
  element: 'h3',
  color: 'black',
  weight: 'bold',
};

type TertiaryHeadingProps = {
  element?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6',
  children: Node | string,
  color?: 'black' | 'white',
  weight?: 'bold' | 'light',
};

export default function TertiaryHeading({
  element,
  children,
  color,
  weight,
}: TertiaryHeadingProps) {
  return (
    <TextPrimitive element={element} variant="h3" weight={weight} color={color}>
      {children}
    </TextPrimitive>
  );
}

import React, { type Node } from 'react';

import { TextPrimitive } from '../TextPrimitive/';

TertiaryHeading.defaultProps = {
  as: 'h3',
  color: 'black',
  weight: 'bold',
};

export default function TertiaryHeading({
  as,
  children,
  color,
  weight,
}: {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6',
  children: Node | string,
  color?: 'black' | 'white',
  weight?: 'bold' | 'light',
}) {
  return (
    <TextPrimitive element={as} variant="h3" weight={weight} color={color}>
      {children}
    </TextPrimitive>
  );
}

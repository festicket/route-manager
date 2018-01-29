import React, { type Node } from 'react';

import { TextPrimitive } from '../TextPrimitive/';

TertiaryHeading.defaultProps = {
  as: 'h3',
  color: 'black',
  weight: 'bold',
};

type TertiaryHeadingProps = {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6',
  children: Node | string,
  color?: 'black' | 'white',
  weight?: 'bold' | 'light',
};

export default function TertiaryHeading({
  as,
  children,
  color,
  weight,
}: TertiaryHeadingProps) {
  return (
    <TextPrimitive element={as} variant="h3" weight={weight} color={color}>
      {children}
    </TextPrimitive>
  );
}

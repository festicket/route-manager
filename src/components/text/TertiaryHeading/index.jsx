import * as React from 'react';

import { TextPrimitive } from '../TextPrimitive/';

TertiaryHeading.defaultProps = {
  element: 'h3',
  color: 'black',
  weight: 'bold',
  spacing: 'none',
};

type TertiaryHeadingProps = {
  element?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6',
  children: React.Node,
  color?: 'black' | 'white',
  weight?: 'bold' | 'light',
  spacing?: 'xl' | 'lg' | 'md' | 'sm' | 'tiny' | 'none' | 'default',
};

export default function TertiaryHeading({
  element,
  children,
  color,
  weight,
  spacing,
}: TertiaryHeadingProps) {
  return (
    <TextPrimitive
      element={element}
      variant="h3"
      weight={weight}
      color={color}
      spacing={spacing}
    >
      {children}
    </TextPrimitive>
  );
}

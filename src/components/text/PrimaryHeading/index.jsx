import * as React from 'react';

import { TextPrimitive } from '../TextPrimitive/';

type PrimaryHeadingProps = {
  element?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6',
  children: React.Node,
  color?: 'black' | 'white',
  spacing?: 'xl' | 'lg' | 'md' | 'sm' | 'tiny' | 'none' | 'default',
};

export default function PrimaryHeading({
  element = 'h1',
  children,
  color = 'black',
  spacing = 'none',
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

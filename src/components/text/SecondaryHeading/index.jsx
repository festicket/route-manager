// @flow
import * as React from 'react';
import TextPrimitive from '../TextPrimitive/';

type SecondaryHeadingProps = {
  element?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'span',
  children: React.Node,
  color?: 'black' | 'white',
  weight?: 'bold' | 'light',
  spacing?: 'xl' | 'lg' | 'md' | 'sm' | 'tiny' | 'none' | 'default',
};

export default function SecondaryHeading({
  element = 'h2',
  children,
  color = 'black',
  weight = 'bold',
  spacing = 'none',
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

import React, { type Node } from 'react';

import { TextPrimitive } from '../TextPrimitive/';

Bodytext.defaultProps = {
  element: 'p',
  color: 'black',
  size: 'regular',
  spacing: 'none',
};

type BodytextProps = {
  element?: 'p' | 'span',
  children: Node | string,
  color?: 'black' | 'white',
  size?: 'small' | 'regular' | 'tiny',
  spacing?: 'xl' | 'lg' | 'md' | 'sm' | 'tiny' | 'none' | 'default',
};

export default function Bodytext({
  element,
  children,
  color,
  size,
  spacing,
}: BodytextProps) {
  return (
    <TextPrimitive
      element={element}
      variant="p"
      weight="light"
      size={size}
      color={color}
      spacing={spacing}
    >
      {children}
    </TextPrimitive>
  );
}

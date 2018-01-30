import React, { type Node } from 'react';

import { TextPrimitive } from '../TextPrimitive/';

Highlight.defaultProps = {
  element: 'p',
  color: 'black',
  size: 'regular',
  spacing: 'none',
};

type HighlightProps = {
  element?: 'p' | 'span',
  children: Node | string,
  color?: 'black' | 'white',
  size?: 'small' | 'regular' | 'tiny',
  spacing?: 'xl' | 'lg' | 'md' | 'sm' | 'tiny' | 'none' | 'default',
};

export default function Highlight({
  element,
  children,
  color,
  size,
  spacing,
}: HighlightProps) {
  return (
    <TextPrimitive
      element={element}
      variant="p"
      weight="regular"
      size={size}
      color={color}
      spacing={spacing}
    >
      {children}
    </TextPrimitive>
  );
}

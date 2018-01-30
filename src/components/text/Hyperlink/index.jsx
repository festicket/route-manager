import React, { type Node } from 'react';

import { TextPrimitive } from '../TextPrimitive/';

Hyperlink.defaultProps = {
  element: 'p',
  color: 'black',
  size: 'regular',
  spacing: 'none',
};

type HyperlinkProps = {
  element?: 'p' | 'span',
  children: Node | string,
  color?: 'black' | 'white',
  size?: 'small' | 'regular' | 'tiny',
  spacing?: 'xl' | 'lg' | 'md' | 'sm' | 'tiny' | 'none' | 'default',
};

export default function Hyperlink({
  element,
  children,
  color,
  size,
  spacing,
}: HyperlinkProps) {
  return (
    <TextPrimitive
      element={element}
      variant="p"
      weight="regular"
      size={size}
      color={color}
      spacing={spacing}
      underline
    >
      {children}
    </TextPrimitive>
  );
}

import React, { type Node } from 'react';

import { TextPrimitive } from '../TextPrimitive/';

Highlight.defaultProps = {
  element: 'p',
  color: 'black',
  size: 'regular',
};

type HighlightProps = {
  element?: 'p' | 'span',
  children: Node | string,
  color?: 'black' | 'white',
  size?: 'small' | 'regular' | 'tiny',
};

export default function Highlight({
  element,
  children,
  color,
  size,
}: HighlightProps) {
  return (
    <TextPrimitive
      element={element}
      variant="p"
      weight="regular"
      size={size}
      color={color}
    >
      {children}
    </TextPrimitive>
  );
}

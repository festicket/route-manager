import React, { type Node } from 'react';

import { TextPrimitive } from '../TextPrimitive/';

Highlight.defaultProps = {
  as: 'p',
  color: 'black',
  size: 'regular',
};

type HighlightProps = {
  as?: 'p' | 'span',
  children: Node | string,
  color?: 'black' | 'white',
  size?: 'small' | 'regular' | 'tiny',
};

export default function Highlight({
  as,
  children,
  color,
  size,
}: HighlightProps) {
  return (
    <TextPrimitive
      element={as}
      variant="p"
      weight="regular"
      size={size}
      color={color}
    >
      {children}
    </TextPrimitive>
  );
}

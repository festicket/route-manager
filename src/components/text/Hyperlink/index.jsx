import React, { type Node } from 'react';

import { TextPrimitive } from '../TextPrimitive/';

Hyperlink.defaultProps = {
  element: 'p',
  color: 'black',
  size: 'regular',
};

type HyperlinkProps = {
  element?: 'p' | 'span',
  children: Node | string,
  color?: 'black' | 'white',
  size?: 'small' | 'regular' | 'tiny',
};

export default function Hyperlink({
  element,
  children,
  color,
  size,
}: HyperlinkProps) {
  return (
    <TextPrimitive
      element={element}
      variant="p"
      weight="regular"
      size={size}
      color={color}
      underline
    >
      {children}
    </TextPrimitive>
  );
}

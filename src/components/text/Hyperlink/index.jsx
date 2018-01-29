import React, { type Node } from 'react';

import { TextPrimitive } from '../TextPrimitive/';

Hyperlink.defaultProps = {
  as: 'p',
  color: 'black',
  size: 'regular',
};

type HyperlinkProps = {
  as?: 'p' | 'span',
  children: Node | string,
  color?: 'black' | 'white',
  size?: 'small' | 'regular' | 'tiny',
};

export default function Hyperlink({
  as,
  children,
  color,
  size,
}: HyperlinkProps) {
  return (
    <TextPrimitive
      element={as}
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

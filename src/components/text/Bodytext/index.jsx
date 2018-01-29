import React, { type Node } from 'react';

import { TextPrimitive } from '../TextPrimitive/';

Bodytext.defaultProps = {
  as: 'p',
  color: 'black',
  size: 'regular',
};

type BodytextProps = {
  as?: 'p' | 'span',
  children: Node | string,
  color?: 'black' | 'white',
  size?: 'small' | 'regular' | 'tiny',
};

export default function Bodytext({ as, children, color, size }: BodytextProps) {
  return (
    <TextPrimitive
      element={as}
      variant="p"
      weight="light"
      size={size}
      color={color}
    >
      {children}
    </TextPrimitive>
  );
}

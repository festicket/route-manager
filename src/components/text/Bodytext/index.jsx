import React, { type Node } from 'react';

import { TextPrimitive } from '../TextPrimitive/';

Bodytext.defaultProps = {
  element: 'p',
  color: 'black',
  size: 'regular',
};

type BodytextProps = {
  element?: 'p' | 'span',
  children: Node | string,
  color?: 'black' | 'white',
  size?: 'small' | 'regular' | 'tiny',
};

export default function Bodytext({
  element,
  children,
  color,
  size,
}: BodytextProps) {
  return (
    <TextPrimitive
      element={element}
      variant="p"
      weight="light"
      size={size}
      color={color}
    >
      {children}
    </TextPrimitive>
  );
}

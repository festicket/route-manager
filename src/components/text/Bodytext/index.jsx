import React, { type Node } from 'react';

import { TextPrimitive } from '../TextPrimitive/';

BodyText.defaultProps = {
  element: 'p',
  color: 'black',
  size: 'regular',
  spacing: 'none',
};

type BodyTextProps = {
  element?: 'p' | 'span',
  children: Node | string,
  color?: 'black' | 'white',
  size?: 'small' | 'regular' | 'tiny',
  spacing?: 'xl' | 'lg' | 'md' | 'sm' | 'tiny' | 'none' | 'default',
};

export default function BodyText({
  element,
  children,
  color,
  size,
  spacing,
}: BodyTextProps) {
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

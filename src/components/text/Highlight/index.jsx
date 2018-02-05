// @flow
import * as React from 'react';

import TextPrimitive from '../TextPrimitive/';

type HighlightProps = {
  element?: 'p' | 'span',
  children: React.Node,
  color?: 'black' | 'white',
  size?: 'small' | 'regular' | 'tiny',
  spacing?: 'xl' | 'lg' | 'md' | 'sm' | 'tiny' | 'none' | 'default',
};

export default function Highlight({
  element = 'p',
  children,
  color = 'black',
  size = 'regular',
  spacing = 'none',
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

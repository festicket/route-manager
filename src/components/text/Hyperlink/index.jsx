// @flow
import * as React from 'react';

import TextPrimitive from '../TextPrimitive/';

type HyperlinkProps = {
  element?: 'p' | 'span',
  children: React.Node,
  color?: 'black' | 'white',
  size?: 'small' | 'regular' | 'tiny',
  spacing?: 'xl' | 'lg' | 'md' | 'sm' | 'tiny' | 'none' | 'default',
};

export default function Hyperlink({
  element = 'p',
  children,
  color = 'black',
  size = 'regular',
  spacing = 'none',
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

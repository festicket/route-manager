// @flow

import * as React from 'react';
import TextPrimitive from 'src/components/text/TextPrimitive';

type BodyTextProps = {
  element?: 'p' | 'span',
  children: React.Node,
  color?: 'black' | 'white',
  size?: 'small' | 'regular' | 'tiny',
  spacing?: 'xl' | 'lg' | 'md' | 'sm' | 'tiny' | 'none' | 'default',
};

export default function BodyText({
  element = 'p',
  children,
  color = 'black',
  size = 'regular',
  spacing = 'none',
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

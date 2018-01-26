import React, { type Node } from 'react';

import { TextPrimitive } from '../TextPrimitive/';

PrimaryHeading.defaultProps = {
  as: 'h1',
};

export default function PrimaryHeading({
  as,
  children,
}: {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6',
  children: Node | string,
}) {
  return (
    <TextPrimitive element={as} variant="h1" weight="bold">
      {children}
    </TextPrimitive>
  );
}

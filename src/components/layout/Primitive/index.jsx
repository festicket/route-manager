// Lib
// -------------
import React, { type Node } from 'react';

// Flow Types
// -------------
export type PrimitiveTypes = {
  element?: 'article' | 'section' | 'div' | 'header' | 'footer',
  children?: Node,
};

// Module
// -------------
function Primitive({
  element = 'div',
  children,
  ...rest
}: PrimitiveTypes): Node {
  return React.createElement(element, rest, children);
}

export default Primitive;

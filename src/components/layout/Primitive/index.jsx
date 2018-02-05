// @flow

// Lib
// -------------
import * as React from 'react';

// Flow Types
// -------------
export type PrimitiveTypes = {
  element?: 'article' | 'section' | 'div' | 'header' | 'footer',
  children?: React.Node,
};

// Module
// -------------
function Primitive({
  element = 'div',
  children,
  ...rest
}: PrimitiveTypes): React.Node {
  return React.createElement(element, rest, children);
}

export default Primitive;

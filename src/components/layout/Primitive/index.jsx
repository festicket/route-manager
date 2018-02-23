// @flow

import * as React from 'react';

export type PrimitiveTypes = {
  element?: 'article' | 'section' | 'div' | 'header' | 'footer',
  children?: React.Node,
};

function Primitive({
  element = 'div',
  children,
  ...rest
}: PrimitiveTypes): React.Node {
  return React.createElement(element, rest, children);
}

export default Primitive;

// @flow
import * as React from 'react';

import { VerticalSeparator } from './styles';

type Props = {
  children: React.Node | string,
  className: string,
};

function VerticalSeparatorComponent({ children, className }: Props) {
  return React.Children.map(children, child => {
    // Compose any passed classanames with the one passed from styled components
    const derivedClass = `${child.props.className} ${className}`;
    // Clone the elemenent and pass through the new derived class
    return React.cloneElement(child, { className: derivedClass });
  });
}

export default VerticalSeparator.withComponent(VerticalSeparatorComponent);

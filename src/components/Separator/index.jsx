// @flow

import * as React from 'react';
import { HR, Wrapper, Content } from './styles';

type PropTypes = {
  children?: React.Node,
  /*
  `className` is only used by `festicket-app/app/containers/Press/index.jsx:30`
  and is a remnant from SASS.
  */
  className?: string,
  variant?: 'light' | 'medium' | 'dark',
  margin?: boolean,
  marginLarge?: boolean,
};

export default function Separator({
  children,
  className,
  variant = 'medium',
  margin = true,
  marginLarge = false,
}: PropTypes) {
  if (!children) {
    return (
      <HR
        className={className}
        variant={variant}
        margin={margin}
        marginLarge={marginLarge}
      />
    );
  }

  return (
    <Wrapper className={className} variant={variant}>
      <Content>{children}</Content>
    </Wrapper>
  );
}
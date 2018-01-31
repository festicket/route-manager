// Lib
// -------------
import React, { type Node } from 'react';

// Components
// -------------

// Styles
// -------------
import { HR, Wrapper, Content } from './styles';

// Flow Types
// -------------
// type Props = {
// };

type PropTypes = {
  children?: Node,
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

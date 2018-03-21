// @flow

import * as React from 'react';

import { Wrapper, StyledTextPrimitive } from './styles';

type Props = {
  element: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span',
  variant: 'theme' | 'white' | 'grey' | 'red',
  children: React.Node,
};

Tag.defaultProps = {
  element: 'span',
};

const mapVariantTextColor = {
  theme: 'white',
  white: 'grey',
  grey: 'grey',
  red: 'red',
};

export default function Tag({ children, element, ...props }: Props) {
  const color = mapVariantTextColor[props.variant];

  return (
    <Wrapper {...props}>
      <StyledTextPrimitive
        color={color}
        element={element}
        size="tiny"
        weight="bold"
      >
        {children}
      </StyledTextPrimitive>
    </Wrapper>
  );
}

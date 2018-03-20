// @flow

// -------------
import React from 'react';

// Components
// -------------

// Styles
// -------------
import { Wrapper, StyledTextPrimitive } from './styles';

// Flow Types
// -------------
type Props = {
  element: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span',
  variant: 'default' | 'bordered' | 'grey' | 'red',
  children: string,
};

Tag.defaultProps = {
  variant: 'default',
  element: 'span',
};

export default function Tag({ children, element, ...props }: Props) {
  const mapVariantTextColor = {
    default: 'white',
    bordered: 'grey',
    grey: 'grey',
    red: 'red',
  };

  return (
    <Wrapper {...props}>
      <StyledTextPrimitive
        color={mapVariantTextColor[props.variant]}
        element={element}
        size="tiny"
        weight="bold"
      >
        {children}
      </StyledTextPrimitive>
    </Wrapper>
  );
}

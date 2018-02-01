// Lib
// -------------
import React from 'react';

// Components
// -------------

// Styles
// -------------
import { StyledBackArrow } from './styles';

// Flow Types
// -------------
type Props = {
  element?: any,
};

export default function ArrowButton({ element: El, ...props }: Props) {
  return (
    <El {...props}>
      <StyledBackArrow width="18" height="18" />
    </El>
  );
}

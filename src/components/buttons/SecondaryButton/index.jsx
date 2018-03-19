// @flow

import * as React from 'react';
import { FlexWrapper } from 'src/components/buttons/styles';

import { StyledSecondaryButton } from './styles';

import type { ButtonProps } from '../flow-types';

export default function SecondaryButton({
  to = '#',
  size = 'regular',
  variant = 'regular',
  element = 'a',
  fullWidth = false,
  fontSize = 'regular',
  isDisabled = false,
  render = () => null,
  children,
  ...props
}: ButtonProps) {
  const resultChildren = render();

  return (
    <StyledSecondaryButton
      to={to}
      size={size}
      variant={variant}
      element={element}
      fullWidth={fullWidth}
      fontSize={fontSize}
      isDisabled={isDisabled}
      render={render}
      {...props}
    >
      <FlexWrapper size={size}>{resultChildren || children}</FlexWrapper>
    </StyledSecondaryButton>
  );
}

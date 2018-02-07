// @flow

// Lib
// -------------
import React from 'react';

// Components
// -------------

// Styles
// -------------
import { StyledSecondaryButton } from './styles';

// Flow Types
// -------------
type Props = {
  to?: string,
  fullWidth?: boolean,
  size?: 'regular' | 'small' | 'inline',
  variant?: 'regular' | 'bordered' | 'transparent',
  element?: 'a' | 'button',
  fontSize?: 'regular' | 'small' | 'tiny',
  isDisabled?: boolean,
  render?: () => mixed,
};

export default function SecondaryButton({
  to = '#',
  size = 'regular',
  variant = 'regular',
  element = 'a',
  fullWidth = false,
  fontSize = 'regular',
  isDisabled = false,
  render = () => null,
  ...props
}: Props) {
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
    />
  );
}

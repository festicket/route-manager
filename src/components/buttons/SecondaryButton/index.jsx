// @flow

// Lib
// -------------
import React from 'react';
import styled, { css } from 'styled-components';
import { prop, ifProp } from 'styled-tools';
import { rgba, darken } from 'polished';

// Components
// -------------
import Primitive from '../ButtonPrimitive';

// Styles
// -------------
import buttonMixin from '../styles';

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

function disabledStyleMixin() {
  return css`
    &:disabled {
      pointer-events: none;
      cursor: not-allowed;
    }
  `;
}

const StyledSecondaryButton = styled(Primitive)`
  ${buttonMixin};
  color: ${prop('theme.colors.greyscale.dark')};
  width: ${ifProp({ fullWidth: true }, '100%')};
  background-color: ${({ theme }) => rgba(theme.colors.greyscale.black, 0.05)};
  &:hover {
    background-color: ${({ theme }) => rgba(theme.colors.greyscale.black, 0.1)};
    color: ${({ theme }) => darken(0.05, theme.colors.greyscale.dark)};
  }
  ${ifProp({ isDisabled: true }, disabledStyleMixin())};
`;

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

// @flow

// Lib
// -------------
import styled, { css } from 'styled-components';
import { prop, ifProp } from 'styled-tools';
import { rgba, darken } from 'polished';

// Components
// -------------
import Primitive from '../ButtonPrimitive';

// Styles
// -------------
import buttonMixin from '../styles';

function disabledStyleMixin() {
  return css`
    &:disabled {
      pointer-events: none;
      cursor: not-allowed;
    }
  `;
}

// Module
// -------------
export const StyledSecondaryButton = styled(Primitive)`
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

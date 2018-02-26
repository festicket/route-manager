// @flow

import styled, { css } from 'styled-components';
import { prop, ifProp } from 'styled-tools';
import { rgba, darken } from 'polished';
import Primitive from '../ButtonPrimitive';
import buttonMixin from '../styles';

function disabledStyleMixin() {
  return css`
    &:disabled {
      pointer-events: none;
      cursor: not-allowed;
    }
  `;
}

/*
The secondary button uses a 0.05 rgba background so that it looks good
against a grey background, which can be seen in the Storybook.
*/
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

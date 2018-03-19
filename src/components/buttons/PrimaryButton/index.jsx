// @flow

import * as React from 'react';
import styled, { css } from 'styled-components';
import { darken, lighten } from 'polished';
import { prop, ifProp, switchProp, withProp } from 'styled-tools';
import Primitive from 'src/components/buttons/ButtonPrimitive';
import { buttonMixin, FlexWrapper } from 'src/components/buttons/styles';

import type { sizeProp, element, fontSize, variant } from '../flow-types';

type ButtonProps = {
  /** React Router `to` prop - like href */
  to?: string,
  /** Boolean indicating whether the button should have `width: 100%` */
  fullWidth?: boolean,
  /** String indicating the size of the button */
  size?: sizeProp,
  /** String indicating the variant of the button */
  variant?: variant,
  /** String indicating the HTML element the component should be */
  element?: element,
  /** BUG: This prop has no effect on the component */
  fontSize?: fontSize,
  /** Boolean indicating whether the button should render as disabled */
  isDisabled?: boolean,
  /** The content of the button  - can be text or HTML */
  children?: React.Node,
  /**
   * Deprecated - `children` can do everything this can do.
   * Will get used instead of `children` prop if it is passed in.
   */
  render?: () => mixed,
};

const StyledPrimaryButton = styled(Primitive)`
  ${buttonMixin};
  color: ${prop('theme.colors.white')};
  width: ${ifProp({ fullWidth: true }, '100%')};
  ${switchProp('variant', {
    regular: css`
      background-color: ${ifProp(
        'isDisabled',
        withProp('theme.colors.brand.primary', lighten(0.2)),
        prop('theme.colors.brand.primary'),
      )};
      color: ${prop('theme.colors.white')};
      &:hover {
        background-color: ${ifProp(
          'isDisabled',
          withProp('theme.colors.brand.primary', lighten(0.2)),
          withProp('theme.colors.brand.primary', darken(0.05)),
        )};
      }`,
    bordered: css`
      background-color: transparent;
      border: 2px solid ${prop('theme.colors.brand.primary')};
      color: ${prop('theme.colors.brand.primary')};
      &:hover {
        border-color: ${withProp('theme.colors.brand.primary', darken(0.05))};
        color: ${withProp('theme.colors.brand.primary', darken(0.05))};
      }`,
    transparent: css`
      background-color: transparent;
      color: ${prop('theme.colors.brand.primary')};
      &:hover {
        color: ${withProp('theme.colors.brand.primary', darken(0.05))};
      }`,
  })};
  ${ifProp('isDisabled', 'pointer-events: none;')};
`;

PrimaryButton.defaultProps = {
  to: '#',
  size: 'regular',
  variant: 'regular',
  element: 'a',
  fullWidth: false,
  fontSize: 'regular',
  isDisabled: false,
};

export default function PrimaryButton({
  render,
  children,
  size,
  ...props
}: ButtonProps) {
  let resultChildren;
  if (render) {
    resultChildren = render();
  } else {
    resultChildren = children;
  }

  return (
    <StyledPrimaryButton size={size} {...props}>
      <FlexWrapper size={size}>{resultChildren}</FlexWrapper>
    </StyledPrimaryButton>
  );
}

// @flow

import * as React from 'react';
import styled, { css } from 'styled-components';
import { darken, lighten } from 'polished';
import { prop, ifProp, switchProp, withProp } from 'styled-tools';
import Primitive from 'src/components/buttons/ButtonPrimitive';
import { buttonMixin, FlexWrapper } from 'src/components/buttons/styles';

type Props = {
  /** React Router `to` prop - like href */
  to?: string,
  /** Boolean indicating whether the button should have `width: 100%` */
  fullWidth?: boolean,
  /** String indicating the size of the button */
  size?: 'regular' | 'small' | 'inline',
  /** String indicating the variant of the button */
  variant?: 'regular' | 'bordered' | 'transparent',
  /** String indicating the HTML element the component should be */
  element?: 'a' | 'button',
  /** BUG: This prop has no effect on the component */
  fontSize?: 'regular' | 'small' | 'tiny',
  /** Boolean indicating whether the button should render as disabled */
  isDisabled?: boolean,
  /** The content of the button */
  children?: React.Node,
  /**
   * Will get used instead of `children` prop if it is passed in. Rich to explain.
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

export default function PrimaryButton({
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
}: Props) {
  const resultChildren = render();

  return (
    <StyledPrimaryButton
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
    </StyledPrimaryButton>
  );
}

// @flow

import * as React from 'react';
import styled, { css } from 'styled-components';
import { darken, lighten } from 'polished';
import { prop, ifProp, switchProp, withProp } from 'styled-tools';
import Primitive from 'src/components/buttons/ButtonPrimitive';
import { buttonMixin, FlexWrapper } from 'src/components/buttons/styles';

import type { ButtonProps } from '../flow-types';

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
}: ButtonProps) {
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

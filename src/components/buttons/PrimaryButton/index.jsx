// @flow

import React from 'react';
import styled, { css } from 'styled-components';
import { darken, lighten } from 'polished';
import { prop, ifProp, switchProp, withProp } from 'styled-tools';
import Primitive from '../ButtonPrimitive';
import buttonMixin from '../styles';

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
        border-color: ${({ theme }) =>
          darken(0.05, theme.colors.brand.primary)};
        color: ${({ theme }) => darken(0.05, theme.colors.brand.primary)};
      }`,
    transparent: css`
      background-color: transparent;
      color: ${prop('theme.colors.brand.primary')};
      &:hover {
        color: ${({ theme }) => darken(0.05, theme.colors.brand.primary)};
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
  ...props
}: Props) {
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
    />
  );
}

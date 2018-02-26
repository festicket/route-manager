// @flow

import * as React from 'react';
import { StyledSecondaryButton } from './styles';
import { FlexWrapper } from '../styles';

type Props = {
  to?: string,
  fullWidth?: boolean,
  size?: 'regular' | 'small' | 'inline',
  variant?: 'regular' | 'bordered' | 'transparent',
  element?: 'a' | 'button',
  fontSize?: 'regular' | 'small' | 'tiny',
  isDisabled?: boolean,
  render?: () => mixed,
  children?: React.Node,
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
  children,
  ...props
}: Props) {
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

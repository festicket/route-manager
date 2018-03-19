// @flow

import * as React from 'react';
import { FlexWrapper } from 'src/components/buttons/styles';

import { StyledSecondaryButton } from './styles';

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

SecondaryButton.defaultProps = {
  to: '#',
  size: 'regular',
  variant: 'regular',
  element: 'a',
  fullWidth: false,
  fontSize: 'regular',
  isDisabled: false,
};

export default function SecondaryButton({
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
    <StyledSecondaryButton size={size} {...props}>
      <FlexWrapper size={size}>{resultChildren}</FlexWrapper>
    </StyledSecondaryButton>
  );
}

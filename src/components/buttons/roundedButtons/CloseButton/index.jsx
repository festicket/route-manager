// @flow
import React from 'react';

import Close from 'src/components/svgs/generated/functional/Close';

import { CloseFlexWrapper, CloseStyledButtonPrimitive } from './styles';

type Props = {
  element: 'a' | 'button',
  onClick?: () => void,
};

export default function CloseButton(props: Props) {
  return (
    <CloseStyledButtonPrimitive {...props}>
      <CloseFlexWrapper>
        <Close color="grey" />
      </CloseFlexWrapper>
    </CloseStyledButtonPrimitive>
  );
}

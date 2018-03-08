// @flow
import React from 'react';

import Close from 'src/components/svgs/generated/functional/Close';

import CloseStyledButtonPrimitive from './styles';
import { FlexWrapper } from '../styles';

type Props = {
  element: 'a' | 'button',
  onClick?: () => void,
};

export default function CloseButton(props: Props) {
  return (
    <CloseStyledButtonPrimitive {...props}>
      <FlexWrapper>
        <Close color="grey" />
      </FlexWrapper>
    </CloseStyledButtonPrimitive>
  );
}

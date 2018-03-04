// @flow
import React from 'react';

import Close from 'src/components/svgs/generated/functional/Close';

import { CloseFlexWrapper, CloseButton } from './styles';

type Props = {
  element: 'a' | 'button',
  onClick?: () => void,
};

export default function RoundedCloseButton(props: Props) {
  return (
    <CloseButton {...props}>
      <CloseFlexWrapper>
        <Close color="grey" />
      </CloseFlexWrapper>
    </CloseButton>
  );
}

// @flow

import React from 'react';

import ChevronRight from 'src/components/svgs/generated/functional/ChevronRight';
import ChevronDown from 'src/components/svgs/generated/functional/ChevronDown';
import ChevronLeft from 'src/components/svgs/generated/functional/ChevronLeft';
import ChevronUp from 'src/components/svgs/generated/functional/ChevronUp';

import {
  ChevronFlexWrapper,
  ChevronButton,
} from 'src/components/buttons/roundedButtons/ChevronButton/styles';

type Props = {
  element?: 'a' | 'button',
  direction: 'right' | 'down' | 'left' | 'up',
  onClick?: () => void,
};

RoundedChevronButton.defaultProps = {
  element: 'a',
};

export default function RoundedChevronButton({ direction, ...props }: Props) {
  let iconElement;

  switch (direction) {
    case 'up':
      iconElement = <ChevronUp color="grey" />;
      break;
    case 'down':
      iconElement = <ChevronDown color="grey" />;
      break;
    case 'left':
      iconElement = <ChevronLeft color="grey" />;
      break;
    case 'right':
      iconElement = <ChevronRight color="grey" />;
      break;
    default:
      iconElement = null;
  }

  return (
    <ChevronButton {...props}>
      <ChevronFlexWrapper>{iconElement}</ChevronFlexWrapper>
    </ChevronButton>
  );
}

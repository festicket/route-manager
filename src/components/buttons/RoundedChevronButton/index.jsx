// @flow

import React from 'react';

import ChevronRight from 'src/components/svgs/generated/functional/ChevronRight';
import ChevronDown from 'src/components/svgs/generated/functional/ChevronDown';
import ChevronLeft from 'src/components/svgs/generated/functional/ChevronLeft';
import ChevronUp from 'src/components/svgs/generated/functional/ChevronUp';

import { FlexWrapper, Button } from './styles';

function RoundedChevronButtonComponent({ direction, ...props }) {
  let icon;

  switch (direction) {
    case 'up':
      icon = <ChevronUp color="grey" />;
      break;
    case 'down':
      icon = <ChevronDown color="grey" />;
      break;
    case 'left':
      icon = <ChevronLeft color="grey" />;
      break;
    case 'right':
      icon = <ChevronRight color="grey" />;
      break;
    default:
      icon = null;
  }

  return (
    <Button {...props}>
      <FlexWrapper>{icon}</FlexWrapper>
    </Button>
  );
}

type Props = {
  element?: 'a' | 'button',
  direction: 'right' | 'down' | 'left' | 'up',
};

export default function RoundedChevronButton({
  element = 'a',
  ...props
}: Props) {
  return <RoundedChevronButtonComponent element={element} {...props} />;
}

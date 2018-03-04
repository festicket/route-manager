// @flow

import React from 'react';

import ChevronRight from 'src/components/svgs/generated/functional/ChevronRight';
import ChevronDown from 'src/components/svgs/generated/functional/ChevronDown';
import ChevronLeft from 'src/components/svgs/generated/functional/ChevronLeft';
import ChevronUp from 'src/components/svgs/generated/functional/ChevronUp';
import Close from 'src/components/svgs/generated/functional/Close';

import { FlexWrapper, Button } from './styles';

type Props = {
  element?: 'a' | 'button',
  icon: 'right' | 'down' | 'left' | 'up' | 'close',
};

RoundedSVGButton.defaultProps = {
  element: 'a',
};

export default function RoundedSVGButton({ icon, element }: Props) {
  let iconComponent;

  switch (icon) {
    case 'up':
      iconComponent = <ChevronUp color="grey" />;
      break;
    case 'down':
      iconComponent = <ChevronDown color="grey" />;
      break;
    case 'left':
      iconComponent = <ChevronLeft color="grey" />;
      break;
    case 'right':
      iconComponent = <ChevronRight color="grey" />;
      break;
    case 'close':
      iconComponent = <Close color="grey" />;
      break;
    default:
      iconComponent = null;
  }

  return (
    <Button element={element}>
      <FlexWrapper>{iconComponent}</FlexWrapper>
    </Button>
  );
}

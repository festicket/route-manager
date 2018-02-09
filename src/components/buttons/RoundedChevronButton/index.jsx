// @flow

import React from 'react';
import styled from 'styled-components';
import SecondaryButton from '../SecondaryButton';
import ChevronRight from '../../icons/ui/ChevronRight';
import ChevronDown from '../../icons/ui/ChevronDown';
import ChevronLeft from '../../icons/ui/ChevronLeft';
import ChevronUp from '../../icons/ui/ChevronUp';

type Props = {
  direction: 'right' | 'down' | 'left' | 'up',
};

function RoundedChevronButtonComponent({ className, direction, ...props }) {
  let icon;

  switch (direction) {
    case 'up':
      icon = <ChevronUp />;
      break;
    case 'down':
      icon = <ChevronDown />;
      break;
    case 'left':
      icon = <ChevronLeft />;
      break;
    case 'right':
      icon = <ChevronRight />;
      break;
    default:
      icon = null;
  }

  return (
    <SecondaryButton className={className} {...props}>
      {icon}
    </SecondaryButton>
  );
}

const StyledRoundedChevronButton = styled(RoundedChevronButtonComponent)`
  font-size: 18px;
  border-radius: 100%;
  width: auto;
  min-width: 0;
  min-height: 0;
  padding: 0;
  width: 28px;
  height: 28px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
`;

const RoundedChevronButton = (props: Props) => (
  <StyledRoundedChevronButton {...props} />
);

export default RoundedChevronButton;

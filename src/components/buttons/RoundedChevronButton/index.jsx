// @flow

import React from 'react';
import styled from 'styled-components';
import SecondaryButton from '../SecondaryButton';
import ChevronRight from '../../svgs/generated/functional/ChevronRight';
import ChevronDown from '../../svgs/generated/functional/ChevronDown';
import ChevronLeft from '../../svgs/generated/functional/ChevronLeft';
import ChevronUp from '../../svgs/generated/functional/ChevronUp';

function RoundedChevronButtonComponent({ className, direction, ...props }) {
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

export default function RoundedChevronButton(props: {
  direction: 'right' | 'down' | 'left' | 'up',
}) {
  return <StyledRoundedChevronButton {...props} />;
}

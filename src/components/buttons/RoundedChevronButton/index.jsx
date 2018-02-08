// @flow

import React from 'react';
import styled from 'styled-components';
import { switchProp } from 'styled-tools';
import SecondaryButton from '../SecondaryButton';
import ChevronRight from '../../icons/ui/ChevronRight';

type Props = {
  direction: 'right' | 'down' | 'left' | 'up',
};

const StyledChevronRight = styled(ChevronRight)`
  ${switchProp('direction', {
    up: 'transform: rotate(-90deg)',
    down: 'transform: rotate(90deg)',
    left: 'transform: rotate(180deg)',
  })};
`;

function RoundedChevronButtonComponent({ className, direction, ...props }) {
  return (
    <SecondaryButton className={className} {...props}>
      <StyledChevronRight direction={direction} />
    </SecondaryButton>
  );
}

const StyledRoundedChevronButton = styled(RoundedChevronButtonComponent)`
  font-size: 20px;
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

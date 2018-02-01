// @flow

// Lib
// -------------
import React from 'react';

// Components
// -------------
import Anchor from '../../text/Anchor';

// Styles
// -------------
import { StyledBackArrow } from './styles';

// Flow Types
// -------------
type Props = {
  element?: any,
};

export default function ArrowButton(props: Props) {
  return (
    <Anchor {...props}>
      <StyledBackArrow width="18" height="18" />
    </Anchor>
  );
}

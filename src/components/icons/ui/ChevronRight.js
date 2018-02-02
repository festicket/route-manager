// @flow

import React from 'react';
import styled from 'styled-components';

const ChevronRight = (props: {}) => (
  <svg viewBox="0 0 20 20" width="1em" height="1em" {...props}>
    <path d="M6.4 4.3l5.7 5.7-5.7 5.7 1.4 1.4 7.1-7.1-7.1-7.1z" />
  </svg>
);

export default styled(ChevronRight)`
  fill: currentColor;
`;

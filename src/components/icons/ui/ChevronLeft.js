// @flow

import React from 'react';
import styled from 'styled-components';

const ChevronLeft = (props: {}) => (
  <svg viewBox="0 0 18 18" width="1em" height="1em" {...props}>
    <path d="M13.2 14.7L7.6 9l5.6-5.7-1.4-1.4-7 7.1 7 7.1z" />
  </svg>
);

export default styled(ChevronLeft)`
  fill: currentColor;
`;

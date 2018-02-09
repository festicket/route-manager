// @flow

import React from 'react';
import styled from 'styled-components';

const ChevronDown = (props: {}) => (
  <svg viewBox="0 0 18 18" width="1em" height="1em" {...props}>
    <path d="M14.7 4.8L9 10.4 3.3 4.8 1.9 6.2l7.1 7 7.1-7z" />
  </svg>
);

export default styled(ChevronDown)`
  fill: currentColor;
`;

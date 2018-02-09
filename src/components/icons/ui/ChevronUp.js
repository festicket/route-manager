// @flow

import React from 'react';
import styled from 'styled-components';

const ChevronUp = (props: {}) => (
  <svg viewBox="0 0 18 18" width="1em" height="1em" {...props}>
    <path d="M3.3 13.2L9 7.6l5.7 5.6 1.4-1.4-7.1-7-7.1 7z" />
  </svg>
);

export default styled(ChevronUp)`
  fill: currentColor;
`;

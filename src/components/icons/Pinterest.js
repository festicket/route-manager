// @flow

import React from 'react';
import styled from 'styled-components';

const Pinterest = (props: {}) => (
  <svg width="1em" height="1em" viewBox="0 0 18 18" {...props}>
    <path d="M7.8 11.9C7.3 14.4 6.7 16.8 5 18c-.5-3.7.8-6.6 1.4-9.5-1-1.7.1-5.2 2.3-4.4 2.7 1.1-2.3 6.5 1 7.1 3.5.7 4.9-6.1 2.8-8.3-3.2-3.1-9.2 0-8.4 4.5.2 1.1 1.3 1.5.5 3-2-.4-2.6-2-2.5-4.1C2.2 2.8 5.2.4 8.2.1 12-.3 15.5 1.5 16 5c.6 4-1.7 8.4-5.7 8-1.2 0-1.7-.6-2.5-1.1z" />
  </svg>
);

export default styled(Pinterest)`
  fill: currentColor;
`;

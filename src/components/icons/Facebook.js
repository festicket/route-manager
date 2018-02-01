// @flow

import React from 'react';
import styled from 'styled-components';

const Facebook = (props: {}) => (
  <svg width="1em" height="1em" viewBox="0 0 18 18" {...props}>
    <path d="M9.3 6.1h2.6L11.6 9H9.3v8.3H5.9V9H4.1V6.1h1.7V4.4c0-1.2.3-2.1.9-2.8C7.3.9 8.2.7 9.5.7h2.3v2.9h-1.4c-.3 0-.5 0-.6.1-.2 0-.3.1-.3.2-.1.1-.1.2-.1.3v.5l-.1 1.4z" />
  </svg>
);

export default styled(Facebook)`
  fill: currentColor;
`;

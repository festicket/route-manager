// @flow

import React from 'react';
import styled from 'styled-components';

const FacebookAlt = (props: {}) => (
  <svg width="1em" height="1em" viewBox="0 0 18 18" {...props}>
    <path d="M10.663 16.32h3.455c1.108 0 2.01-.903 2.01-2.018V2.018C16.128.9 15.228 0 14.118 0H2.01C.902 0 0 .903 0 2.018v12.284c0 1.117.9 2.018 2.01 2.018h5.62V9.994H6.15v-2.45h1.48V5.54c0-.367-.076-2.82 3.108-2.82h2.248v2.55h-1.653c-.328 0-.658.338-.658.59v1.674h2.308c-.093 1.285-.284 2.46-.284 2.46h-2.04v6.326z" />
  </svg>
);

export default styled(FacebookAlt)`
  fill: currentColor;
`;

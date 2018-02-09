// @flow
import React from 'react';
import { social as baseSVG } from '../../base-svgs';

const Facebook1 = (props: {}) => (
  <svg width={24} height={24} viewBox="0 0 24 24" {...props}>
    <title>Facebook</title>
    <path
      d="M15.546 23v-8.527h2.777s.26-1.584.386-3.316h-3.148v-2.26c0-.337.451-.79.898-.79h2.255v-3.44h-3.066c-4.344 0-4.242 3.307-4.242 3.8v2.702H9.391v3.304h2.015V23H3.438A2.438 2.438 0 0 1 1 20.562V3.438A2.438 2.438 0 0 1 3.438 1h17.124A2.438 2.438 0 0 1 23 3.438v17.124A2.438 2.438 0 0 1 20.562 23h-5.016z"
      fill="currentColor"
      fillRule="evenodd"
    />
  </svg>
);

export default baseSVG.withComponent(Facebook1);

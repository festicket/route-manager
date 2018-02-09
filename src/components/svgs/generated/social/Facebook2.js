// @flow
import React from 'react';
import { social as baseSVG } from '../../base-svgs';

const Facebook2 = (props: {}) => (
  <svg viewBox="0 0 24 24" {...props}>
    <path
      d="M15.5 23v-8.5h2.8s.3-1.6.4-3.3h-3.1V8.9c0-.3.5-.8.9-.8h2.3V4.7h-3.1c-4.3 0-4.2 3.3-4.2 3.8v2.7h-2v3.3h2V23h-8C2.1 23 1 21.9 1 20.6V3.4C1 2.1 2.1 1 3.4 1h17.1C21.9 1 23 2.1 23 3.4v17.1c0 1.3-1.1 2.4-2.4 2.4h-5.1z"
      fill="currentColor"
    />
  </svg>
);

export default baseSVG.withComponent(Facebook2);

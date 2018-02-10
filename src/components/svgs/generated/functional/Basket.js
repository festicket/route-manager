// @flow
import React from 'react';
import { functional as baseSVG } from '../../base-svgs';
import type { FunctionalPropTypes as PropTypes } from '../../type-defs';

const Basket = (props: {}) => (
  <svg viewBox="0 0 18 18" {...props}>
    <path d="M17 4.9h-4V4c0-2.2-1.8-4-4-4S5 1.8 5 4v.9H1L0 18h18L17 4.9zM7 4c0-1.1.9-2 2-2s2 .9 2 2v.9H7V4zM2.2 16l.7-9.1H5V9h2V6.9h4V9h2V6.9h2.2l.7 9.1H2.2z" />
  </svg>
);

export default baseSVG.withComponent(Basket);

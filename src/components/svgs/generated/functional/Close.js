// @flow
import React from 'react';
import { functional as baseSVG } from '../../styled-base-svgs';
import type { FunctionalSVGProps } from '../../flow-types';

const Close = (props: FunctionalSVGProps) => (
  <svg viewBox="0 0 18 18" {...props}>
    <path d="M16 14.7l-5.6-5.6L16 3.5l-1.4-1.4L9 7.7 3.4 2.1 2 3.5l5.6 5.6L2 14.7l1.4 1.4L9 10.5l5.6 5.6z" />
  </svg>
);

export default baseSVG.withComponent(Close);

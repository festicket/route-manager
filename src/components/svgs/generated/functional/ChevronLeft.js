// @flow
import React from 'react';
import { functional as baseSVG } from '../../styled-base-svgs';
import type { FunctionalSVGProps } from '../../flow-types';

const ChevronLeft = (props: FunctionalSVGProps) => (
  <svg viewBox="0 0 18 18" {...props}>
    <path d="M12.2 14.7L6.6 9l5.6-5.7-1.4-1.4-7 7.1 7 7.1z" />
  </svg>
);

export default baseSVG.withComponent(ChevronLeft);

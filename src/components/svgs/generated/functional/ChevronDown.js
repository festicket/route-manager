// @flow
import React from 'react';
import { functional as baseSVG } from '../../styled-base-svgs';
import type { FunctionalSVGProps } from '../../flow-types';

const ChevronDown = (props: FunctionalSVGProps) => (
  <svg viewBox="0 0 18 18" {...props}>
    <path d="M14.7 4.8L9 10.4 3.3 4.8 1.9 6.2l7.1 7 7.1-7z" />
  </svg>
);

export default baseSVG.withComponent(ChevronDown);

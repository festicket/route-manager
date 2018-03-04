// @flow
import React from 'react';
import { functional as baseSVG } from '../../styled-base-svgs';
import type { FunctionalSVGProps } from '../../flow-types';

const ChevronDown = (props: FunctionalSVGProps) => (
  <svg viewBox="0 0 18 18" {...props}>
    <path d="M14.7 5.8L9 11.4 3.3 5.8 1.9 7.2l7.1 7 7.1-7z" />
  </svg>
);

export default baseSVG.withComponent(ChevronDown);

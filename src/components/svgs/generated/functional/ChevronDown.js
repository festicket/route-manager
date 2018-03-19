// @flow
import React from 'react';
import { StyledSVG } from '../../styles';
import type { FunctionalSVGProps } from '../../types';

const ChevronDown = (props: FunctionalSVGProps) => (
  <svg width={18} height={18} viewBox="0 0 18 18" {...props}>
    <path d="M14.7 5.8L9 11.4 3.3 5.8 1.9 7.2l7.1 7 7.1-7z" />
  </svg>
);

export default StyledSVG.withComponent(ChevronDown);

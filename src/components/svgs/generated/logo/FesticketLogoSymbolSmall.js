// @flow
import React from 'react';
import { StyledSVG } from '../../styles';
import type { LogoSVGProps } from '../../types';

const FesticketLogoSymbolSmall = (props: LogoSVGProps) => (
  <svg width={32} height={35} viewBox="0 0 32.2 35" {...props}>
    <path d="M.4.1l.8 15 29.4-3L32 3.4zM5.7 26.2l.4 7.6 10.3 1.1 2-12.6z" />
    <path d="M26.1 14.9L4.5 12.7 2.7 23.8h23.9z" />
  </svg>
);

export default StyledSVG.withComponent(FesticketLogoSymbolSmall);

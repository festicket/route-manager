// @flow
import React from 'react';
import { logo as baseSVG } from '../../base-svgs';
import { LogoPropTypes as PropTypes } from '../../prop-types';

const FesticketLogoSymbol = (props: {}) => (
  <svg id="Layer_1" viewBox="0 0 32.2 35" {...props}>
    <path id="Shape" className="st0" d="M.4.1l.8 15 29.4-3L32 3.4z" />
    <path id="Shape_1_" className="st0" d="M5.7 26.2l.4 7.6 10.3 1.1 2-12.6z" />
    <path
      id="Shape_2_"
      className="st0"
      d="M26.1 14.9L4.5 12.7 2.7 23.8h23.9z"
    />
  </svg>
);

FesticketLogoSymbol.propTypes = PropTypes;

export default baseSVG.withComponent(FesticketLogoSymbol);

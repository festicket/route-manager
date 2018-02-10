// @flow
import React from 'react';
import { functional as baseSVG } from '../../base-svgs';
import { FunctionalPropTypes as PropTypes } from '../../prop-types';

const ChevronLeft = (props: {}) => (
  <svg viewBox="0 0 18 18" {...props}>
    <path d="M13.2 14.7L7.6 9l5.6-5.7-1.4-1.4-7 7.1 7 7.1z" />
  </svg>
);

ChevronLeft.propTypes = PropTypes;

export default baseSVG.withComponent(ChevronLeft);

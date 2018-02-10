// @flow
import React from 'react';
import { functional as baseSVG } from '../../base-svgs';
import { FunctionalPropTypes as PropTypes } from '../../prop-types';

const ChevronRight = (props: {}) => (
  <svg viewBox="0 0 18 18" {...props}>
    <path d="M4.8 3.3L10.4 9l-5.6 5.7 1.4 1.4 7-7.1-7-7.1z" />
  </svg>
);

ChevronRight.propTypes = PropTypes;

export default baseSVG.withComponent(ChevronRight);

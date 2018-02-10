// @flow
import React from 'react';
import { functional as baseSVG } from '../../base-svgs';
import { FunctionalPropTypes as PropTypes } from '../../prop-types';

const ChevronUp = (props: {}) => (
  <svg viewBox="0 0 18 18" {...props}>
    <path d="M3.3 13.2L9 7.6l5.7 5.6 1.4-1.4-7.1-7-7.1 7z" />
  </svg>
);

ChevronUp.propTypes = PropTypes;

export default baseSVG.withComponent(ChevronUp);

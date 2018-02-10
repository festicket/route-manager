// @flow
import React from 'react';
import { social as baseSVG } from '../../base-svgs';
import { SocialPropTypes as PropTypes } from '../../prop-types';

const Pinterest = (props: {}) => (
  <svg viewBox="0 0 22 22" {...props}>
    <path d="M11 0C4.9 0 0 4.9 0 11c0 4.7 2.9 8.6 7 10.2-.1-.9-.2-2.2 0-3.2.2-.9 1.3-5.5 1.3-5.5S8 12 8 11c0-1.5.9-2.7 2-2.7.9 0 1.4.7 1.4 1.6 0 .9-.6 2.4-.9 3.7-.3 1.1.5 2 1.6 2 1.9 0 3.5-2.1 3.5-5 0-2.6-1.9-4.5-4.6-4.5-3.1 0-5 2.3-5 4.8 0 .9.4 2 .8 2.5.1.1.1.2.1.3-.1.3-.3 1.1-.3 1.2 0 .2-.2.2-.4.1-1.4-.7-2.2-2.7-2.2-4.3C4 7.2 6.5 4 11.3 4c3.8 0 6.8 2.7 6.8 6.3 0 3.8-2.4 6.8-5.7 6.8-1.1 0-2.2-.6-2.5-1.3 0 0-.5 2.1-.7 2.6-.2 1-.9 2.1-1.4 2.9 1 .3 2.1.5 3.3.5 6.1 0 11-4.9 11-11C22 4.9 17.1 0 11 0z" />
  </svg>
);

Pinterest.propTypes = PropTypes;

export default baseSVG.withComponent(Pinterest);

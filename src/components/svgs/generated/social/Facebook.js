// @flow
import React from 'react';
import { social as baseSVG } from '../../base-svgs';
import { SocialPropTypes as PropTypes } from '../../prop-types';

const Facebook = (props: {}) => (
  <svg viewBox="0 0 22 22" {...props}>
    <path d="M14.5 22v-8.5h2.8s.3-1.6.4-3.3h-3.1V7.9c0-.3.5-.8.9-.8h2.3V3.7h-3.1c-4.3 0-4.2 3.3-4.2 3.8v2.7h-2v3.3h2V22h-8C1.1 22 0 20.9 0 19.6V2.4C0 1.1 1.1 0 2.4 0h17.1C20.9 0 22 1.1 22 2.4v17.1c0 1.3-1.1 2.4-2.4 2.4h-5.1z" />
  </svg>
);

Facebook.propTypes = PropTypes;

export default baseSVG.withComponent(Facebook);

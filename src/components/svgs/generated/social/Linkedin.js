// @flow
import React from 'react';
import { social as baseSVG } from '../../base-svgs';
import { SocialPropTypes as propTypes } from '../../prop-types';

const LinkedIn = (props: {}) => (
  <svg viewBox="0 0 21 20" {...props}>
    <path d="M.5 6.4h4.1V20H.5V6.4zm15.3-.1c2.9 0 5.2 2 5.2 6.2V20h-4.6v-7c0-1.8-.7-3.1-2.3-3.1-1.2 0-1.9.8-2.2 1.7-.1.3-.1.7-.1 1.1V20H7.1s.1-12.5 0-13.6h4.6v2.1c.3-.9 1.8-2.2 4.1-2.2zM2.5 0C4 0 4.9 1 5 2.4c0 1.3-1 2.4-2.5 2.4C1 4.7 0 3.7 0 2.4 0 1 1 0 2.5 0z" />
  </svg>
);

LinkedIn.propTypes = propTypes;

export default baseSVG.withComponent(LinkedIn);

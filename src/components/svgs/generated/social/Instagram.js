// @flow
import React from 'react';
import { social as baseSVG } from '../../base-svgs';
import { SocialPropTypes as PropTypes } from '../../prop-types';

const Instagram = (props: {}) => (
  <svg viewBox="0 0 22 22" {...props}>
    <path d="M11 2c2.9 0 3.3 0 4.4.1 1.1 0 1.7.2 2 .4.5.2.9.4 1.3.8s.6.7.8 1.3c.1.4.3 1 .4 2 .1 1.1.1 1.5.1 4.4s0 3.3-.1 4.4c0 1.1-.2 1.7-.4 2-.2.5-.4.9-.8 1.3s-.7.6-1.3.8c-.4.1-1 .3-2 .4-1.1.1-1.5.1-4.4.1s-3.3 0-4.4-.1c-1.1 0-1.7-.2-2-.4-.5-.2-.9-.4-1.3-.8s-.6-.7-.8-1.3c-.1-.4-.3-1-.4-2C2 14.3 2 13.9 2 11V6.5c0-1.1.2-1.7.4-2 .2-.5.5-.9.8-1.3s.8-.6 1.3-.8c.4-.1 1-.3 2-.4H11zm0-2C8 0 7.6 0 6.5.1c-1.2.1-2 .2-2.7.5-.7.3-1.3.6-2 1.2S.8 3 .5 3.7C.3 4.5.1 5.3.1 6.5 0 7.6 0 8 0 11s0 3.4.1 4.5c.1 1.2.2 2 .5 2.7.3.7.7 1.3 1.3 1.9.6.6 1.2 1 1.9 1.3.7.3 1.5.5 2.7.5 1.1 0 1.5.1 4.5.1s3.4 0 4.5-.1c1.2-.1 2-.2 2.7-.5.7-.3 1.3-.7 1.9-1.3.6-.6 1-1.2 1.3-1.9.3-.7.5-1.5.5-2.7 0-1.2.1-1.5.1-4.5s0-3.4-.1-4.5c-.1-1.2-.2-2-.5-2.7-.3-.7-.7-1.3-1.3-1.9-.6-.6-1.2-1-1.9-1.3-.7-.3-1.5-.5-2.7-.5C14.3 0 14 0 11 0z" />
    <path d="M11 5.3c-3.1 0-5.6 2.5-5.6 5.6s2.5 5.6 5.6 5.6 5.6-2.5 5.6-5.6-2.5-5.6-5.6-5.6zm0 9.3c-2 0-3.7-1.6-3.7-3.7S9 7.3 11 7.3 14.6 9 14.6 11 13 14.6 11 14.6z" />
    <circle cx={16.8} cy={5.1} r={1.3} />
  </svg>
);

Instagram.propTypes = PropTypes;

export default baseSVG.withComponent(Instagram);

// @flow
import React from 'react';
import { functional as baseSVG } from '../../base-svgs';

const Search = (props: {}) => (
  <svg viewBox="0 0 20 20" {...props}>
    <path d="M9 3c3.3 0 6 2.7 6 6 0 1.3-.4 2.6-1.3 3.7l-.5.6-.6.5c-1 .8-2.3 1.2-3.6 1.2-3.3 0-6-2.7-6-6s2.7-6 6-6m0-2C4.6 1 1 4.6 1 9s3.6 8 8 8c1.8 0 3.5-.6 4.9-1.7l3.7 3.7 1.4-1.4-3.7-3.7C16.4 12.5 17 10.8 17 9c0-4.4-3.6-8-8-8z" />
  </svg>
);

export default baseSVG.withComponent(Search);

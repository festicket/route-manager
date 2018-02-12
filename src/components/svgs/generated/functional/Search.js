// @flow
import React from 'react';
import { functional as baseSVG } from '../../styled-base-svgs';
import type { functionalFlowType } from '../../flow-types';

const Search = (props: functionalFlowType) => (
  <svg viewBox="0 0 18 18" {...props}>
    <path d="M8 2c3.3 0 6 2.7 6 6 0 1.3-.4 2.6-1.3 3.7l-.5.6-.6.5c-1 .8-2.3 1.2-3.6 1.2-3.3 0-6-2.7-6-6s2.7-6 6-6m0-2C3.6 0 0 3.6 0 8s3.6 8 8 8c1.8 0 3.5-.6 4.9-1.7l3.7 3.7 1.4-1.4-3.7-3.7C15.4 11.5 16 9.8 16 8c0-4.4-3.6-8-8-8z" />
  </svg>
);

export default baseSVG.withComponent(Search);

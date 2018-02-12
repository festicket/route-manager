// @flow

// template based on https://github.com/smooth-code/svgr#use-a-specific-template
module.exports = (opts = {}) => {
  let props = '';

  if (opts.expandProps && opts.ref) {
    props = '{svgRef, ...props}';
  } else if (opts.expandProps) {
    props = 'props';
  } else if (opts.ref) {
    props = '{svgRef}';
  }

  return (code, state) => `// @flow
import React from 'react';
import { functional as baseSVG } from '../../styled-base-svgs';
import type { FunctionalSVGProps } from '../../flow-types';

const ${state.componentName} = (${props}: FunctionalSVGProps) => ${code}

export default baseSVG.withComponent(${state.componentName});
`;
};

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
import { StyledSVG } from '../../styles';
import type { FunctionalSVGProps } from '../../types';

const ${state.componentName} = (${props}: FunctionalSVGProps) => ${code}

export default StyledSVG.withComponent(${state.componentName});
`;
};

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
import { social as baseSVG } from '../../base-svgs';
import { SocialPropTypes as PropTypes } from '../../prop-types';

const ${state.componentName} = (${props}: {}) => ${code}

${state.componentName}.propTypes = PropTypes;

export default baseSVG.withComponent(${state.componentName});
`;
};

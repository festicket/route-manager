// @flow
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
import styled from 'styled-components';

const ${state.componentName} = (${props}: {}) => ${code}

export default styled(${state.componentName})\`
  height: 26px;
\`;
`;
};

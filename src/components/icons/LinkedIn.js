// @flow

import React from 'react';
import styled from 'styled-components';

const LinkedIn = (props: {}) => (
  <svg width="1em" height="1em" viewBox="0 0 18 18" {...props}>
    <path d="M4.8 6.4v10H1.5v-10h3.3zM5 3.3c0 .5-.2.9-.5 1.2s-.8.6-1.4.6c-.5 0-1-.2-1.3-.5s-.5-.8-.5-1.3.2-.9.5-1.2.8-.5 1.4-.5c.6 0 1 .2 1.3.5.3.3.5.7.5 1.2zm11.7 7.4v5.7h-3.3V11c0-.7-.1-1.3-.4-1.7-.3-.4-.7-.6-1.3-.6-.4 0-.8.1-1.1.3-.2.4-.4.7-.6 1-.1.2-.1.5-.1.8v5.6H6.6v-10h3.3v1.4c.1-.2.3-.4.4-.6.1-.2.3-.3.6-.5.2-.2.5-.3.9-.4.3-.1.7-.2 1.2-.2 1.1 0 2.1.4 2.8 1.1.6.9.9 2 .9 3.5z" />
  </svg>
);

export default styled(LinkedIn)`
  fill: currentColor;
`;

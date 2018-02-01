// @flow

import React from 'react';
import styled from 'styled-components';

const Close = (props: {}) => (
  <svg width="1em" height="1em" viewBox="0 0 32 32" {...props}>
    <path d="M27.893 25.262L18.65 16l9.26-9.262a1.874 1.874 0 0 0-2.647-2.647L16 13.353 6.74 4.108a1.867 1.867 0 0 0-2.63 2.636l9.242 9.26-9.244 9.262c-.34.34-.55.807-.55 1.324a1.874 1.874 0 0 0 3.198 1.324L16 18.65l9.262 9.262c.34.34.807.55 1.324.55a1.874 1.874 0 0 0 1.323-3.198z" />
  </svg>
);

export default styled(Close)`
  fill: currentColor;
`;

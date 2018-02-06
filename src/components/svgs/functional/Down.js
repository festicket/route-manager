// @flow
import React from 'react';
import styled from 'styled-components';
import { colorVariations, hoverColorVariations } from '../styles';

const Down = (props: {}) => (
  <svg viewBox="0 0 20 20" {...props}>
    <path d="M15.7 6.6L10 12.2 4.3 6.6 2.9 8l7.1 7.1L17.1 8z" />
  </svg>
);

export default styled(Down)`
  height: 18px;
  ${colorVariations} ${hoverColorVariations};
`;

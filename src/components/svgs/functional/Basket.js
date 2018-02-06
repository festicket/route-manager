// @flow
import React from 'react';
import styled from 'styled-components';
import { colorVariations, hoverColorVariations } from '../styles';

const Basket = (props: {}) => (
  <svg viewBox="0 0 20 20" {...props}>
    <path d="M18 5.9h-4V5c0-2.2-1.8-4-4-4S6 2.8 6 5v.9H2L1 19h18L18 5.9zM8 5c0-1.1.9-2 2-2s2 .9 2 2v.9H8V5zM3.2 17l.7-9.1H6V10h2V7.9h4V10h2V7.9h2.1l.7 9.1H3.2z" />
  </svg>
);

export default styled(Basket)`
  height: 18px;
  ${colorVariations} ${hoverColorVariations};
`;

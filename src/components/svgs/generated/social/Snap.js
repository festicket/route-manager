// @flow
import React from 'react';
import styled from 'styled-components';
import { svgColorVariations } from '../../color-styles';
import { svgHoverColorVariations } from '../../hover-styles';

const Snap = (props: {}) => (
  <svg viewBox="0 0 21 20" {...props}>
    <path
      d="M10.6 20h-.2-.1c-1.2 0-2-.6-2.8-1.1-.5-.4-1-.7-1.6-.8-.3-.1-.5-.1-.8-.1-.5 0-.9.1-1.2.1-.2 0-.3.1-.4.1-.1 0-.3 0-.3-.2s-.1-.3-.1-.5c-.1-.4-.1-.7-.3-.7-2-.3-2.5-.7-2.7-1v-.1c0-.1.1-.2.2-.2 3-.5 4.4-3.6 4.5-3.8.2-.4.2-.7.1-1-.2-.5-.9-.7-1.3-.9-.1 0-.2-.1-.3-.1-.9-.4-1-.7-.9-.9-.2-.4.3-.6.6-.6h.2c.5.2.8.3 1.1.3.5 0 .7-.2.7-.2v-.7c-.2-1.4-.3-3.2.2-4.3C6.5.2 9.4 0 10.3 0h.4c.9 0 3.7.2 5.1 3.3.5 1 .3 2.8.3 4.3v.7s.2.2.6.2c.3 0 .6-.1 1-.3.1-.1.2-.1.3-.1.1 0 .3 0 .4.1.3.1.5.3.5.5s-.2.5-.9.8c-.1 0-.2.1-.3.1-.5.1-1.1.4-1.3.9-.1.3-.1.6.1 1 .1.1 1.4 3.3 4.5 3.8.1 0 .2.1.2.2v.1c-.1.3-.7.7-2.7 1-.2 0-.2.2-.3.7 0 .2-.1.3-.1.5 0 .1-.1.2-.3.2-.1 0-.3 0-.4-.1-.3-.1-.7-.1-1.2-.1-.3 0-.6 0-.9.1-.6.1-1.1.5-1.6.8-1 .7-1.8 1.3-3.1 1.3z"
      fill="#242529"
    />
  </svg>
);

export default styled(Snap)`
  height: 22px;
  ${svgColorVariations} ${svgHoverColorVariations};
`;

// @flow
import React from 'react';
import styled from 'styled-components';
import { svgColorVariations } from '../../color-styles';
import { svgHoverColorVariations } from '../../hover-styles';
import { logoHeightVariations } from '../../logo-size-styles';

const FesticketLogoWordmark = (props: {}) => (
  <svg id="Layer_1" viewBox="0 0 134 35" {...props}>
    <path id="Shape" className="st0" d="M.4.1l.8 15 29.4-3L32 3.4z" />
    <path id="Shape_1_" className="st0" d="M5.7 26.2l.4 7.6 10.3 1.1 2-12.6z" />
    <path
      id="Shape_2_"
      className="st0"
      d="M26.1 14.9L4.5 12.7 2.7 23.8h23.9z"
    />
    <path
      id="Shape_3_"
      className="st0"
      d="M41.6 18.1h-1.7v-2.9h1.7v-1.1c0-2.4 1.1-3.9 4-3.9h2.2v2.9h-1.4c-1.2 0-1.5.4-1.5 1.4v.6h2.8l-.5 2.9h-2.4v10h-3.3v-9.9h.1z"
    />
    <path
      id="Shape_4_"
      className="st0"
      d="M74.3 11.4l3.3-.5v4.2h2.7V18h-2.7v5.9c0 .9.3 1.2 1.4 1.2h1.4V28h-1.9c-2.3 0-4-.5-4-3.4l-.2-13.2z"
    />
    <path
      id="Shape_5_"
      className="st0"
      d="M82.1 11.8c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2c-1.2 0-2-.9-2-2zm.3 3.3h3.3V28h-3.3V15.1z"
    />
    <path
      id="Shape_6_"
      className="st0"
      d="M110 28l-4-5.6-1.2 1.2V28h-3.3V11.4l3.3-.5v8.6l4.5-4.4h4.2l-5.1 4.9 5.7 8z"
    />
    <path
      id="Shape_7_"
      className="st0"
      d="M127.9 11.4l3.3-.5v4.2h2.7V18h-2.7v5.9c0 .9.3 1.2 1.4 1.2h1.4V28h-1.9c-2.3 0-4-.5-4-3.4l-.2-13.2z"
    />
    <path
      id="Shape_8_"
      className="st0"
      d="M54.3 25.5c1.3 0 2-.6 2.4-1.6l3.2.5c-.6 2.2-2.7 4-5.5 4-3.7 0-6.3-2.2-6.3-6.8 0-4.2 2.6-6.8 6.3-6.8 3.6 0 6 2.5 6 6.7 0 .4 0 .8-.1 1.2h-8.8c.1 1.9 1.1 2.8 2.8 2.8M51.5 20H57c-.3-1.5-1.2-2.3-2.7-2.3-1.4.1-2.5.7-2.8 2.3"
    />
    <path
      id="Shape_9_"
      className="st0"
      d="M120.1 25.5c1.3 0 2-.6 2.4-1.6l3.2.5c-.6 2.2-2.7 4-5.5 4-3.7 0-6.3-2.2-6.3-6.8 0-4.2 2.6-6.8 6.3-6.8 3.6 0 6 2.5 6 6.7 0 .4 0 .8-.1 1.2h-8.8c.1 1.9 1.1 2.8 2.8 2.8m-2.8-5.5h5.5c-.3-1.5-1.2-2.3-2.7-2.3-1.3.1-2.4.7-2.8 2.3"
    />
    <path
      id="Shape_10_"
      className="st0"
      d="M61.6 24.3l3.2-.4c.1 1.2.9 1.9 2.3 1.9 1.6 0 2.2-.4 2.2-1.2 0-.6-.5-.9-2-1.4l-2.1-.6c-1.5-.5-3.3-1.2-3.3-3.6.1-3 2.7-4.1 5.3-4.1 2.7 0 5.2 1.1 5.2 3.8l-3.2.5c0-1-.9-1.6-2-1.6-1.2 0-1.8.4-1.8 1.1 0 .4.3.8 1.3 1.1l2.8.9c1.9.6 3.2 1.5 3.2 3.6 0 3.1-2.7 4.2-5.5 4.2-3.1-.1-5.6-1.4-5.6-4.2"
    />
    <path
      id="Shape_11_"
      className="st0"
      d="M87.7 21.7c0-3.9 2.3-6.9 6.3-6.9 3.1 0 5.4 1.9 5.7 4.7l-3.2.5c-.3-1.2-1-2.2-2.6-2.2-2.1 0-2.9 1.8-2.9 3.8 0 2 .8 3.8 2.9 3.8 1.6 0 2.4-.8 2.6-2.1l3.2.5c-.5 2.8-2.5 4.7-5.8 4.7-4-.1-6.2-2.9-6.2-6.8"
    />
  </svg>
);

export default styled(FesticketLogoWordmark)`
  ${svgColorVariations}
  ${svgHoverColorVariations}
  ${logoHeightVariations}
`;

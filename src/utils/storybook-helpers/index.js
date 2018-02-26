// @flow

import styled, { css } from 'styled-components';
import { prop, switchProp } from 'styled-tools';

const BlackBackground = styled.div`
  background-color: black;
  padding: 1em;
`;

const WhiteBackground = styled.div`
  background-color: white;
  padding: 1em;
`;

const GreyBackground = styled.div`
  background-color: ${prop('theme.colors.greyscale.grey')};
  padding: 1em;
`;

const FullWidthBackground = styled.div`
  height: 100vh;
  width: 100vw;
`;

export const Background = {
  White: WhiteBackground,
  Black: BlackBackground,
  Grey: GreyBackground,
  FullWidth: FullWidthBackground,
};

export const Box = styled.div`
  padding: 50px;
  box-sizing: border-box;
  ${switchProp('variant', {
    dark: css`
      background: ${prop('theme.colors.brand.primary')};
      color: ${prop('theme.colors.white')};`,
    default: css`
      background: ${prop('theme.colors.white')};`,
  })};
`;

// Remove this button component and update
// the modal story when the button primitives are added.
export const Button = styled.button`
  text-transform: uppercase;
  font-style: normal;
  font-size: 10px;
  font-weight: 700;
  line-height: 10px;
  letter-spacing: 0.8px;
  overflow: hidden;
  text-align: center;
  height: 27px;
  width: auto;
  display: inline-block;
  padding: 0 10px;
  color: #000;
  background-color: #fff;
  box-shadow: inset 0 0 0 2px #000;
`;

export const CenteredFlexRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

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

export const Background = {
  White: WhiteBackground,
  Black: BlackBackground,
};

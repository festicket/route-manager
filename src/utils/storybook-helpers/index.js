// @flow

import styled from 'styled-components';
import theme from 'src/utils/theme';

const ThemeBackground = styled.div`
  background-color: ${theme.colors.brand.primary};
  color: ${theme.colors.white};
  padding: 1em;
`;

const WhiteBackground = styled.div`
  background-color: white;
  padding: 1em;
`;

const FullWidthBackground = styled.div`
  height: 100vh;
  width: 100vw;
`;

const MonospaceBackground = styled.div`
  padding: 1em;
  text-align: center;
  font-family: monospace;
`;

export const Background = {
  White: WhiteBackground,
  Theme: ThemeBackground,
  FullWidth: FullWidthBackground,
  Monospace: MonospaceBackground,
};

export const CenteredFlexRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const TallContentPlaceholder = styled.div`
  background: yellow;
  padding: 2em;
  min-height: 40em;
  border: 2px solid red;
`;

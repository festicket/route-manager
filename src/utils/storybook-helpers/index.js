// @flow

import styled from 'styled-components';
import theme from 'src/utils/theme';

/**
 * Use when the Storybook Component should only ever appear on a theme coloured background
 */
const ThemeBackground = styled.div`
  background-color: ${theme.colors.brand.primary};
  color: ${theme.colors.white};
  padding: 1em;
`;

/**
 * Try not to use. For situations when a component needs child content with a white background
 */
const WhiteBackground = styled.div`
  background-color: white;
  padding: 1em;
`;

/*
  Use when creating a story for a component that is not designed to be
  flush against the horizontal viewport
*/
export const Content = styled.div`
  padding: 1em;
`;

/**
 * Use when adding documentation to the Storybook for a component
 */
const DocumentationBackground = styled.div`
  background-color: lightgrey;
  font-family: monospace;
  padding: 1em;
`;

export const Background = {
  White: WhiteBackground,
  Theme: ThemeBackground,
  Documentation: DocumentationBackground,
};

export const TallContentPlaceholder = styled.div`
  background: yellow;
  padding: 2em;
  min-height: 40em;
  border: 2px solid red;
`;

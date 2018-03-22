// @flow

import styled, { css } from 'styled-components';
// import { darken } from 'polished';
import { prop, switchProp } from 'styled-tools';
import TextPrimitive from 'src/components/text/TextPrimitive';

// sometimes semantically we need a heading, but we never want the
// text to be block
export const StyledTextPrimitive = styled(TextPrimitive)`
  display: inline;
  margin: 0;
  line-height: 18px; // needed to correctly vertically center code
  white-space: nowrap; // Tags should only ever be a single line of text
`;

export const Wrapper = styled.div`
  display: inline-flex;
  padding: 0 5px;
  height: 24px;
  align-items: center;

  ${switchProp('variant', {
    theme: css`
      background-color: ${prop('theme.colors.brand.primary')};`,
    white: css`
      background-color: ${prop('theme.colors.white')};
      border: 1px solid ${prop('theme.colors.greyscale.silver')};`,
    grey: css`
      background-color: ${prop('theme.colors.greyscale.grey')};
      border: 1px solid transparent;`,
    red: css`
      background-color: ${prop('theme.colors.dangerBackground')};
      border: 1px solid transparent;`,
  })};
`;

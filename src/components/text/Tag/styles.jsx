// @flow

import styled, { css } from 'styled-components';
// import { darken } from 'polished';
import { prop, switchProp } from 'styled-tools';
import TextPrimitive from 'src/components/text/TextPrimitive';

// sometimes semanticly we need an heading, but we never want the
// text to be block
export const StyledTextPrimitive = styled(TextPrimitive)`
  display: inline;
  margin: 0;
`;

export const Wrapper = styled.div`
  display: inline-block;
  padding: 3px 5px;
  ${switchProp('variant', {
    default: css`
      background-color: ${prop('theme.colors.brand.primary')};`,
    bordered: css`
      background-color: ${prop('theme.colors.white')};
      border: 1px solid ${prop('theme.colors.greyscale.dark')};`,
    grey: css`
      background-color: ${prop('theme.colors.greyscale.grey')};
      border: 1px solid transparent;`,
    red: css`
      background-color: ${prop('theme.colors.dangerBackground')};
      border: 1px solid transparent;`,
  })};
`;

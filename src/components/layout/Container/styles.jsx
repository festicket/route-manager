// @flow

import styled, { css } from 'styled-components';
import { switchProp } from 'styled-tools';
import breakpoint from 'src/utils/breakpoint';

export const StyledContainer = styled.div`
  ${switchProp('size', {
    normal: css`
      max-width: 100%;
      margin: 0 auto;

      ${breakpoint('from-lg')`
        width: 1220px;
      `};`,
    alternative: css`
      max-width: 100%;
      margin: 0 auto;

      ${breakpoint('from-md')`
        width: 650px;
      `};

      ${breakpoint('from-lg')`
        width: 800px;
      `};`,
  })};
`;

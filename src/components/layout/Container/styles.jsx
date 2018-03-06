// @flow

import styled, { css } from 'styled-components';
import { switchProp, ifProp } from 'styled-tools';
import breakpoint from 'src/utils/breakpoint';

export const StyledContainer = styled.div`
  ${switchProp('size', {
    normal: css`
      max-width: 100%;
      margin: 0 auto;
      padding: ${ifProp('noPadding', '0', '0 20px')};

      ${breakpoint('from-sm')`
        padding: ${ifProp('noPadding', '0', '0px 50px')};
      `};

      ${breakpoint('from-lg')`
        width: 1220px;
      `};`,
    alternative: css`
      max-width: 100%;
      margin: 0 auto;
      padding: ${ifProp('noPadding', '0', '0 20px')};

      ${breakpoint('from-sm')`
        padding: ${ifProp('noPadding', '0', '0px 50px')};
      `};

      ${breakpoint('from-md')`
        width: 650px;
      `};

      ${breakpoint('from-lg')`
        width: 800px;
      `};`,
  })};
`;

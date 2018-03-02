// @flow

import styled, { css } from 'styled-components';
import { switchProp } from 'styled-tools';
import breakpoint from 'src/utils/breakpoint';

export const StyledSection = styled.section`
  display: block;

  ${switchProp('variant', {
    section: css`
      margin-bottom: 60px;

      ${breakpoint('from-sm')`
        margin-bottom: 80px;
      `};

      ${breakpoint('from-md')`
        margin-bottom: 100px;
      `};`,
    'semi-section': css`
      margin-bottom: 40px;

      ${breakpoint('from-md')`
        margin-bottom: 50px;
      `};`,
  })};
`;

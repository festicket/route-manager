// @flow

import styled from 'styled-components';
import { prop } from 'styled-tools';
import breakpoint from 'src/utils/breakpoint';

export const VerticalSeparator = styled.div`
  display: inline-flex;
  align-items: center;

  &::after {
    display: inline-block;
    content: '';
    width: 1px;
    height: 20px;
    background: ${prop('theme.colors.greyscale.silver')};
    margin: 0 20px;

    ${breakpoint('from-sm')`
      margin: 0 30px;
    `};
  }
`;

// @flow

import styled from 'styled-components';
import breakpoint from '../../../utils/breakpoint';

export const StyledGutter = styled.div`
  padding: 0 20px;

  ${breakpoint('from-sm')`
    padding: 0 50px;
  `};
`;

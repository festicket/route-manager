// @flow

import styled from 'styled-components';
import { prop } from 'styled-tools';
import breakpoint from '../../../utils/breakpoint';

const VerticalSeparator = styled.div`
  display: inline-block;
  width: 1px;
  height: 20px;
  background: ${prop('theme.colors.greyscale.silver')};
  margin: 0 20px;

  ${breakpoint('from-sm')`
    margin: 0 30px;
  `};
`;

export default VerticalSeparator;

// @flow
import { prop } from 'styled-tools';

import { StyledButtonPrimitive, FlexWrapper } from '../styles';

const CloseStyledButtonPrimitive = StyledButtonPrimitive.extend`
  background-color: ${prop('theme.colors.white')};
  box-shadow: 0 2px 30px 0 ${prop('theme.colors.shadowColor')};

  // TODO: add hover styles in FES-5617

  ${FlexWrapper} {
    width: 38px;
    height: 38px;
  }
`;

export default CloseStyledButtonPrimitive;

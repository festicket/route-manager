// @flow
import { prop } from 'styled-tools';

import { StyledButtonPrimitive, FlexWrapper } from '../styles';

const CloseStyledButtonPrimitive = StyledButtonPrimitive.extend`
  background-color: ${prop('theme.colors.white')};
  box-shadow: 0 2px 30px 0 ${prop('theme.colors.shadowColor')};

  // TODO: hover styles?

  ${FlexWrapper} {
    width: 38px;
    height: 38px;
  }
`;

export default CloseStyledButtonPrimitive;

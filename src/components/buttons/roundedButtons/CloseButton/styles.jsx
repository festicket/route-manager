// @flow
import { prop } from 'styled-tools';

import { Button, FlexWrapper } from '../styles';

const CloseFlexWrapper = FlexWrapper.extend`
  width: 38px;
  height: 38px;
`;

const CloseButton = Button.extend`
  background-color: ${prop('theme.colors.white')};
  box-shadow: 0 2px 30px 0 ${prop('theme.colors.shadowColor')};
`;

export { CloseButton, CloseFlexWrapper };

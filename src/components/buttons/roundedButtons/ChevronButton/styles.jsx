// @flow
import { prop } from 'styled-tools';
import { darken, rgba } from 'polished';

import { StyledButtonPrimitive, FlexWrapper } from '../styles';

const ChevronStyledButtonPrimitive = StyledButtonPrimitive.extend`
  background-color: ${prop('theme.colors.greyscale.grey')};

  &:hover {
    background-color: ${({ theme }) => rgba(theme.colors.greyscale.black, 0.1)};
    color: ${({ theme }) => darken(0.05, theme.colors.greyscale.dark)};
  }

  ${FlexWrapper} {
    width: 28px;
    height: 28px;
  }
`;

export default ChevronStyledButtonPrimitive;

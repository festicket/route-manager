// @flow

import styled from 'styled-components';
import { prop } from 'styled-tools';
import BackArrow from '../../icons/ui/BackArrow';

export const StyledBackArrow = styled(BackArrow)`
  color: ${prop('theme.colors.brand.primary')};
  transform: rotate(180deg);
`;

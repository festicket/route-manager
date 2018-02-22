// @flow

import styled from 'styled-components';
import { prop } from 'styled-tools';

export const Wrapper = styled.div`
  background: ${prop('theme.colors.greyscale.grey')};
  padding: 30px 25px;
`;

export const BodyWrapper = styled.div`
  border-left: 4px solid ${prop('theme.colors.brand.primary')};
  padding-left: 20px;
`;

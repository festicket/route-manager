// @flow

import styled from 'styled-components';
import { ifProp } from 'styled-tools';
import Gutter from 'src/components/layout/Gutter';

export const StyledGutter = styled(Gutter)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  padding-top: 20px;
  padding-bottom: 20px;
`;

export const BodyWrapper = styled.div`
  display: ${ifProp('open', 'block', 'none')};
`;

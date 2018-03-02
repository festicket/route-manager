// @flow

import styled from 'styled-components';
import { ifProp } from 'styled-tools';
import spacing from '../../../utils/spacing';

export const TitleRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  ${ifProp('open', spacing('md'))};
`;

export const BodyWrapper = styled.div`
  display: ${ifProp('open', 'block', 'none')};
`;

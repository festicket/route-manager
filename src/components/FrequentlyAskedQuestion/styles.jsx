// @flow

import styled from 'styled-components';
import { prop, ifProp } from 'styled-tools';
import spacing from '../../utils/spacing';

export const Wrapper = styled.div`
  background: ${prop('theme.colors.greyscale.grey')};
  padding: 30px 25px;
  ${spacing('md')};
`;

export const TitleRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  ${ifProp('open', spacing('md'))};
`;

export const BodyWrapper = styled.div`
  display: ${ifProp('open', 'block', 'none')};
  border-left: 4px solid ${prop('theme.colors.brand.primary')};
  padding-left: 20px;

  p:not(:last-of-type) {
    ${spacing('md')};
  }
`;

// @flow

import styled from 'styled-components';
import { ifProp } from 'styled-tools';
import Gutter from 'src/components/layout/Gutter';
import media from 'src/utils/media';

// reset styles for the button
export const StyledButton = styled.button`
  display: inline-block;
  background: transparent;
  padding: 0;
  border: 0;
  outline: 0;
  width: 100%;
  text-align: left;
`;

export const StyledGutter = styled(Gutter)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  padding-top: 20px;
  padding-bottom: 20px;

  ${media('from-sm')} {
    padding-top: 25px;
    padding-bottom: 25px;
  }

  ${media('from-md')} {
    padding-top: 30px;
    padding-bottom: 30px;
  }
`;

export const BodyWrapper = styled.div`
  display: ${ifProp('open', 'block', 'none')};
`;

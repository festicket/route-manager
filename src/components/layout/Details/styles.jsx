// @flow

import styled from 'styled-components';
import { ifProp, prop } from 'styled-tools';
import { darken, rgba } from 'polished';
import Gutter from 'src/components/layout/Gutter';
import media from 'src/utils/media';

// align the chevron and add a grey background
export const ChevronBackground = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background-color: ${prop('theme.colors.greyscale.grey')};
`;

// reset styles for the button
export const StyledButton = styled.button`
  display: inline-block;
  background: transparent;
  padding: 0;
  border: 0;
  outline: 0;
  width: 100%;
  text-align: left;

  &:hover ${ChevronBackground} {
    background-color: ${({ theme }) => rgba(theme.colors.greyscale.black, 0.1)};
    color: ${({ theme }) => darken(0.05, theme.colors.greyscale.dark)};
  }
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

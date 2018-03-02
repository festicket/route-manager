// @flow

import styled, { css } from 'styled-components';
import { prop, ifProp, switchProp } from 'styled-tools';
import breakpoint from 'src/utils/breakpoint';

export const Wrapper = styled.span`
  box-sizing: border-box;
  border-radius: 50%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  ${ifProp(
    'initial',
    css`
      border: 2px solid ${prop('theme.colors.brand.primary')};
      color: ${prop('theme.colors.brand.primary')};
      text-transform: capitalize;
      text-align: center;
      font-weight: ${prop('theme.fontWeight.bold')};
    `,
  )};

  ${switchProp('variant', {
    small: css`
      font-size: 12px;
      width: 24px;
      height: 24px;

      ${breakpoint('from-sm')`
        font-size: 16px;
        width: 44px;
        height: 44px;
      `};`,
    medium: `
      font-size: 23px;
      width: 52px;
      height: 52px;`,
    large: `
      font-size: 25px;
      width: 88px;
      height: 88px;`,
  })};
`;

export const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

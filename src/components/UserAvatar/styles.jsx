// @flow

import styled, { css } from 'styled-components';
import { prop, ifProp, switchProp } from 'styled-tools';
import breakpoint from '../../utils/breakpoint';

export const Wrapper = styled.span`
  box-sizing: border-box;
  border-radius: 50%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-transform: capitalize;
  text-align: center;
  font-weight: ${prop('theme.fontWeight.bold')};

  ${ifProp(
    'avatarLarge',
    css`
      background-position: 50% 50%;
      background-size: cover;
      border: 0;
      color: transparent;
    `,
  )};

  ${ifProp(
    'initial',
    css`
      border: 2px solid ${prop('theme.colors.brand.primary')};
      color: ${prop('theme.colors.brand.primary')};
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
    medium: css`
      font-size: 23px;
      width: 52px;
      height: 52px;`,
    large: css`
      font-size: 25px;
      width: 88px;
      height: 88px;`,
  })};
`;

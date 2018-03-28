// @flow

import styled, { css } from 'styled-components';
import { prop } from 'styled-tools';

const bullet = css`
  ::after {
    content: '\u25CF';
    color: ${prop('theme.colors.brand.primary')};
    margin: 0 5px;
  }
`;

export const List = styled.ul`
  padding: 0;
  list-style: none;
`;

// eslint-disable-next-line
export const ListItem = styled.li`
  display: inline-block;

  &:not(:last-child) {
    ${bullet};
  }
`;

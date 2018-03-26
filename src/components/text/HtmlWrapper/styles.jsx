// @flow

import styled from 'styled-components';
import { prop } from 'styled-tools';
import spacing from 'src/utils/spacing';

export default styled.span`
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p:not(:last-child),
  ul:not(:last-child),
  ol:not(:last-child) {
    ${spacing('md')};
  }

  li {
    ${spacing('xs')};
  }

  a {
    text-decoration: underline;
    text-decoration-skip: ink;
    font-weight: ${prop('theme.fontWeight.regular')};
    color: ${prop('theme.colors.greyscale.black')};
  }
`;

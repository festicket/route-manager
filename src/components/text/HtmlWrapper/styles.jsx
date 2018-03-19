// @flow

import styled from 'styled-components';
import spacing from 'src/utils/spacing';

export default styled.span`
  p:not(:last-of-type) {
    ${spacing('md')};
  }
`;

// @flow

import styled from 'styled-components';
import { switchProp } from 'styled-tools';
import media from 'src/utils/media';

export const StyledGutter = styled.div`
  padding: 0 20px;

  ${media('from-sm')} {
    padding: ${switchProp('variant', {
      default: '0 50px',
      small: '0 25px',
    })};
  }
`;

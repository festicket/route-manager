// @flow

import * as React from 'react';
import styled, { css } from 'styled-components';
import { switchProp } from 'styled-tools';
import breakpoint from '../../../utils/breakpoint';

const StyledWrapper = styled.div`
  ${switchProp('size', {
    normal: css`
      max-width: 100%;
      margin: 0 auto;
      padding: 0 20px;

      ${breakpoint('from-sm')`
        padding: 0 50px;
      `};

      ${breakpoint('from-lg')`
        width: 1220px;
      `};`,
    alternative: css`
      max-width: 100%;
      margin: 0 auto;
      padding: 0 20px;

      ${breakpoint('from-sm')`
        padding: 0 50px;
      `};

      ${breakpoint('from-md')`
        width: 650px;
      `};

      ${breakpoint('from-lg')`
        width: 800px;
      `};`,
  })};
`;

type Props = {|
  size: 'full' | 'normal' | 'alternative',
  children: React.Node,
|};

Wrapper.defaultProps = {
  size: 'normal',
};

export default function Wrapper(props: Props) {
  return <StyledWrapper {...props} />;
}

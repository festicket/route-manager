// @flow

import * as React from 'react';
import { StyledGutter } from './styles';

type Props = {|
  children: React.Node,
  variant: 'page' | 'small',
|};

Gutter.defaultProps = {
  variant: 'page',
};

export default function Gutter(props: Props) {
  return <StyledGutter {...props} />;
}

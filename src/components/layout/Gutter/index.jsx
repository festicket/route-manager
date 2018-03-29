// @flow

import * as React from 'react';
import { StyledGutter } from './styles';

type Props = {|
  children: React.Node,
  variant: 'default' | 'small',
|};

Gutter.defaultProps = {
  variant: 'default',
};

export default function Gutter(props: Props) {
  return <StyledGutter {...props} />;
}

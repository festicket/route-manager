// @flow

import * as React from 'react';
import { StyledBox } from './styles';

type Props = {|
  children: React.Node,
|};

export default function Box(props: Props) {
  return <StyledBox {...props} />;
}

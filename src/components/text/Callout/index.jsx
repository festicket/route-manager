// @flow

import * as React from 'react';
import { Wrapper } from './styles';

type Props = {|
  children: React.Node,
|};

export default function Callout(props: Props) {
  return <Wrapper {...props} />;
}

// @flow

import * as React from 'react';
import { Container } from './styles';

type Props = {|
  size?: 'full' | 'normal' | 'alternative',
  children: React.Node,
|};

export default function Wrapper({ size, children }: Props) {
  return <Container size={size}>{children}</Container>;
}

Wrapper.defaultProps = {
  size: 'normal',
};

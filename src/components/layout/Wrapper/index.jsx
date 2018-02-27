// @flow

import * as React from 'react';
import { StyledWrapper } from './styles';

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

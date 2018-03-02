// @flow

import * as React from 'react';
import { StyledContainer } from './styles';

type Props = {|
  size: 'full' | 'normal' | 'alternative',
  children: React.Node,
|};

Container.defaultProps = {
  size: 'normal',
};

export default function Container(props: Props) {
  return <StyledContainer {...props} />;
}

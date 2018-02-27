// @flow

import * as React from 'react';
import { Container, SlantedBackgroundWrapper } from './styles';

type Props = {|
  size: 'full' | 'normal' | 'alternative',
  backgroundVariant?: 'primary' | 'grey',
  slantVariant?: 'primary' | 'grey' | 'white',
  slantHorizontalDirection: 'to-left' | 'to-right',
  slantVerticalOffset: boolean,
  children: React.Node,
|};

function Wrapper({
  size,
  backgroundVariant,
  slantVariant,
  slantHorizontalDirection,
  slantVerticalOffset,
  children,
}: Props) {
  return (
    <SlantedBackgroundWrapper
      backgroundVariant={backgroundVariant}
      slantVariant={slantVariant}
      slantHorizontalDirection={slantHorizontalDirection}
      slantVerticalOffset={slantVerticalOffset}
    >
      <Container size={size}>{children}</Container>
    </SlantedBackgroundWrapper>
  );
}

Wrapper.defaultProps = {
  size: 'normal',
  slantHorizontalDirection: 'to-right',
  slantVerticalOffset: false,
};

export default Wrapper;

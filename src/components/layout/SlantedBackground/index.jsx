// @flow

import * as React from 'react';
import { StyledSlantedBackground } from './styles';

type Props = {|
  backgroundVariant?: 'primary' | 'grey',
  slantVariant?: 'primary' | 'grey' | 'white',
  slantHorizontalDirection: 'to-left' | 'to-right',
  slantVerticalOffset: boolean,
  children: React.Node,
|};

SlantedBackground.defaultProps = {
  slantHorizontalDirection: 'to-right',
  slantVerticalOffset: false,
};

export default function SlantedBackground(props: Props) {
  return <StyledSlantedBackground {...props} />;
}

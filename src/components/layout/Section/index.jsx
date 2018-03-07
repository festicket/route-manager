// @flow

import * as React from 'react';
import { StyledSection } from './styles';

type Props = {|
  variant: 'section' | 'semi-section',
  children: React.Node,
|};

Section.defaultProps = {
  variant: 'section',
};

export default function Section(props: Props) {
  return <StyledSection {...props} />;
}

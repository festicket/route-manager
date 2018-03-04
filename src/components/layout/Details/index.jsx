// @flow
/* eslint-disable react/no-danger */

import * as React from 'react';

import RoundedSVGButton from '../../buttons/RoundedSVGButton';
import TertiaryHeading from '../../text/TertiaryHeading';
import { TitleRow, BodyWrapper } from './styles';

type Props = {
  openInitially: boolean,
  title: string,
  children: React.Node,
};

type State = {
  open: boolean,
};

export default class Details extends React.Component<Props, State> {
  static defaultProps = {
    openInitially: false,
  };

  constructor(props: Props) {
    super();

    this.state = {
      open: props.openInitially,
    };
  }

  toggleOpen = () => {
    this.setState(state => ({ open: !state.open }));
  };

  render() {
    return (
      <div>
        <TitleRow open={this.state.open} onClick={this.toggleOpen}>
          <TertiaryHeading element="h3">{this.props.title}</TertiaryHeading>
          <RoundedSVGButton
            element="button"
            icon={this.state.open ? 'up' : 'down'}
          />
        </TitleRow>
        <BodyWrapper open={this.state.open}>{this.props.children}</BodyWrapper>
      </div>
    );
  }
}

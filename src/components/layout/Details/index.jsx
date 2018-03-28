// @flow
/* eslint-disable react/no-danger */

import * as React from 'react';

import ChevronButton from 'src/components/buttonsRound/ChevronButton';
import TertiaryHeading from 'src/components/text/TertiaryHeading';
import { StyledGutter, BodyWrapper } from './styles';

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
        <StyledGutter
          variant="small"
          open={this.state.open}
          onClick={this.toggleOpen}
        >
          <TertiaryHeading element="h3">{this.props.title}</TertiaryHeading>
          <ChevronButton
            element="button"
            direction={this.state.open ? 'up' : 'down'}
          />
        </StyledGutter>
        <BodyWrapper open={this.state.open}>{this.props.children}</BodyWrapper>
      </div>
    );
  }
}

// @flow
/* eslint-disable react/no-danger */

import * as React from 'react';

import ChevronButton from 'src/components/buttonsRound/ChevronButton';
import TertiaryHeading from 'src/components/text/TertiaryHeading';
import Gutter from 'src/components/layout/Gutter';
import { StyledButton, StyledGutter, BodyWrapper } from './styles';

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
        <StyledButton onClick={this.toggleOpen}>
          <StyledGutter variant="small">
            <TertiaryHeading element="h3">{this.props.title}</TertiaryHeading>
            <ChevronButton
              element="button"
              direction={this.state.open ? 'up' : 'down'}
            />
          </StyledGutter>
        </StyledButton>
        <BodyWrapper open={this.state.open}>
          <Gutter variant="small">{this.props.children}</Gutter>
        </BodyWrapper>
      </div>
    );
  }
}

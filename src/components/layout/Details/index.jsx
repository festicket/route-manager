// @flow
/* eslint-disable react/no-danger */

import * as React from 'react';

import ChevronUp from 'src/components/svgs/generated/functional/ChevronUp';
import ChevronDown from 'src/components/svgs/generated/functional/ChevronDown';
import TertiaryHeading from 'src/components/text/TertiaryHeading';
import Gutter from 'src/components/layout/Gutter';
import {
  StyledButton,
  StyledGutter,
  ChevronBackground,
  BodyWrapper,
} from './styles';

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
            <ChevronBackground>
              {this.state.open ? (
                <ChevronUp color="grey" />
              ) : (
                <ChevronDown color="grey" />
              )}
            </ChevronBackground>
          </StyledGutter>
        </StyledButton>
        <BodyWrapper open={this.state.open}>
          <Gutter variant="small">{this.props.children}</Gutter>
        </BodyWrapper>
      </div>
    );
  }
}

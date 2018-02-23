// @flow

import * as React from 'react';

import RoundedChevronButton from '../buttons/RoundedChevronButton';
import TertiaryHeading from '../text/TertiaryHeading';
import BodyText from '../text/BodyText';
import { Wrapper, TitleRow, BodyWrapper } from './styles';

type Props = {
  title: string,
  children: React.Node,
};

export default class FrequentlyAskedQuestion extends React.Component<Props> {
  state = {
    open: false,
  };

  toggleOpen = () => {
    this.setState(state => ({ open: !state.open }));
  };

  render() {
    return (
      <Wrapper>
        <TitleRow open={this.state.open}>
          <TertiaryHeading element="h3">{this.props.title}</TertiaryHeading>
          <RoundedChevronButton
            element="button"
            direction={this.state.open ? 'up' : 'down'}
            onClick={this.toggleOpen}
          />
        </TitleRow>
        <BodyWrapper open={this.state.open}>
          <BodyText size="small">{this.props.children}</BodyText>
        </BodyWrapper>
      </Wrapper>
    );
  }
}

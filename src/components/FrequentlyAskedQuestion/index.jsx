// @flow
/* eslint-disable react/no-danger */

import * as React from 'react';

import RoundedChevronButton from '../buttons/RoundedChevronButton';
import TertiaryHeading from '../text/TertiaryHeading';
import BodyText from '../text/BodyText';
import { Wrapper, TitleRow, BodyWrapper } from './styles';

type Props = {
  question: string,
  answer: string,
  openInitially?: boolean,
};

type State = {
  open: boolean,
};

export default class FrequentlyAskedQuestion extends React.Component<
  Props,
  State,
> {
  constructor(props: Props) {
    super();

    this.state = {
      open: props.openInitially || false,
    };
  }

  toggleOpen = () => {
    this.setState(state => ({ open: !state.open }));
  };

  render() {
    return (
      <Wrapper>
        <TitleRow open={this.state.open}>
          <TertiaryHeading element="h3">{this.props.question}</TertiaryHeading>
          <RoundedChevronButton
            element="button"
            direction={this.state.open ? 'up' : 'down'}
            onClick={this.toggleOpen}
          />
        </TitleRow>
        <BodyWrapper open={this.state.open}>
          <BodyText element="span" size="small">
            <span dangerouslySetInnerHTML={{ __html: this.props.answer }} />
          </BodyText>
        </BodyWrapper>
      </Wrapper>
    );
  }
}

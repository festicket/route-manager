// @flow

import * as React from 'react';

import TertiaryHeading from '../text/TertiaryHeading';
import BodyText from '../text/BodyText';
import { Wrapper, BodyWrapper } from './styles';

type Props = {
  title: string,
  children: React.Node,
};

export default function FrequentlyAskedQuestion({ title, children }: Props) {
  return (
    <Wrapper>
      <TertiaryHeading element="h3" spacing="md">
        {title}
      </TertiaryHeading>
      <BodyWrapper>
        <BodyText size="small">{children}</BodyText>
      </BodyWrapper>
    </Wrapper>
  );
}

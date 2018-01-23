import React from 'react';

// Styles
import { Wrapper } from './styles';

type Props = {
  name: string,
};

export default function ExampleComponent({ name }: Props) {
  return <Wrapper>Hi {name}.</Wrapper>;
}

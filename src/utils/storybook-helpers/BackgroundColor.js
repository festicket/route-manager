// @flow

import React from 'react';
import styled from 'styled-components';

const storyDecorator = StyledComponent => (storyFn: Function) => (
  <StyledComponent>{storyFn()}</StyledComponent>
);

const BlackBackground = styled.div`
  background-color: black;
  padding: 1em;
`;

const WhiteBackground = styled.div`
  background-color: white;
  padding: 1em;
`;

const GreyBackground = styled.div`
  background-color: lightgrey;
  padding: 1em;
`;

export default {
  White: storyDecorator(WhiteBackground),
  Black: storyDecorator(BlackBackground),
  Grey: storyDecorator(GreyBackground),
};

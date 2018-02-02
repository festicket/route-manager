// @flow

import styled from 'styled-components';

const BlackBackground = styled.div`
  background-color: black;
  padding: 1em;
`;

const WhiteBackground = styled.div`
  background-color: white;
  padding: 1em;
`;

export const Background = {
  White: WhiteBackground,
  Black: BlackBackground,
};

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

const GreyBackground = styled.div`
  background-color: lightgrey;
  padding: 1em;
  text-align: center;
  font-family: monospace;
`;

const FullWidthBackground = styled.div`
  height: 100vh;
  width: 100vw;
`;

export const Background = {
  White: WhiteBackground,
  Black: BlackBackground,
  Grey: GreyBackground,
  FullWidth: FullWidthBackground,
};

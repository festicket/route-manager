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

// Remove this button component and update
// the modal story when the button primitives are added.
export const Button = styled.button`
  text-transform: uppercase;
  font-style: normal;
  font-size: 10px;
  font-weight: 700;
  line-height: 10px;
  letter-spacing: 0.8px;
  overflow: hidden;
  text-align: center;
  height: 27px;
  width: auto;
  display: inline-block;
  padding: 0 10px;
  color: #000;
  background-color: #fff;
  box-shadow: inset 0 0 0 2px #000;
`;

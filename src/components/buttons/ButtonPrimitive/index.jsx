// @flow

// Lib
// -------------
import React, { type Node } from 'react';
import styled from 'styled-components';

// Components
// -------------
import { TextPrimitive as Text } from '../../text/TextPrimitive';
import Link from '../../text/Anchor';

// Styles
// -------------
// import { Wrapper } from './styles';

// Flow Types
// -------------
type Props = {
  element: string,
  children?: Node,
  onClick?: () => mixed,
  fontSize?: string,
  isDisabled?: boolean,
  render?: () => mixed,
};

function Button(props) {
  // We have to clean the props here as a standard button component
  // Throws errors for the unknown props variant and element
  const { render, isDisabled } = props;
  const newProps = { ...props };
  delete newProps.variant;
  delete newProps.element;
  delete newProps.fullWidth;
  delete newProps.fontSize;
  delete newProps.isDisabled;
  delete newProps.render;

  const resultChildren = render();

  return (
    <button {...newProps} aria-disabled={isDisabled} disabled={isDisabled}>
      {resultChildren || (
        <Text
          element="span"
          variant="p"
          weight="bold"
          size={props.fontSize}
          color="inherit"
        >
          {props.children}
        </Text>
      )}
    </button>
  );
}

const ResetButton = styled(Button)`
  border: none;
  outline: none;
`;

export default function Primitive({
  fontSize = 'regular',
  render = () => null,
  ...props
}: Props) {
  let newProps;

  if (props.element === 'button') {
    newProps = { fontSize, render, ...props, variant: null };
    return <ResetButton {...newProps} />;
  }

  newProps = { fontSize, render, ...props, variant: 'inherit' };
  return <Link {...newProps} weight="bold" />;
}

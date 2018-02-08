// @flow

import React, { type Node } from 'react';
import styled from 'styled-components';
import Text from '../../text/TextPrimitive';
import Link from '../../text/Anchor';
import { blacklistProps } from '../../../utils/props';

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
  const newProps = blacklistProps(props, [
    'variant',
    'element',
    'fullWidth',
    'fontSize',
    'isDisabled',
    'render',
  ]);

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

  newProps = blacklistProps(props, [
    'variant',
    'element',
    'fullWidth',
    'isDisabled',
  ]);

  return <Link {...newProps} weight="bold" />;
}

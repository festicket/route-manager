// @flow

import * as React from 'react';
import styled from 'styled-components';
import Anchor from 'src/components/text/Anchor';
import { blacklistProps } from 'src/utils/props';

type Props = {
  className?: string,
  element: string,
  children?: React.Node,
  onClick?: () => mixed,
  fontSize?: string,
  isDisabled?: boolean,
  render?: () => mixed,
  size?: 'regular' | 'small' | 'inline',
};

function Button(props) {
  /*
  We have to strip out most props here so they don't get passed
  as attributes on the <button /> HTML element, which is invalid
  */
  const { isDisabled } = props;
  const newProps = blacklistProps(props, [
    'variant',
    'element',
    'fullWidth',
    'fontSize',
    'isDisabled',
    'render',
  ]);

  return (
    <button {...newProps} aria-disabled={isDisabled} disabled={isDisabled}>
      {props.children}
    </button>
  );
}

const ResetButton = styled(Button)`
  border: none;
  outline: none;
  margin: 0; // This is needed to remove margin only added in Safari (11.0.3)
`;

export default function Primitive({
  fontSize = 'regular',
  render = () => null,
  size = 'regular',
  children,
  ...props
}: Props) {
  let newProps;

  if (props.element === 'button') {
    newProps = { size, fontSize, render, ...props };
    return <ResetButton {...newProps}>{children}</ResetButton>;
  }

  newProps = blacklistProps(props, [
    'variant',
    'element',
    'fullWidth',
    'isDisabled',
  ]);

  return (
    <Anchor {...newProps} weight="bold">
      {children}
    </Anchor>
  );
}

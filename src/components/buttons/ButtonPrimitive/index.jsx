// @flow

import * as React from 'react';
import styled from 'styled-components';
import Link from '../../text/Anchor';
import { blacklistProps } from '../../../utils/props';

type Props = {
  className?: string,
  element: string,
  children?: React.Node,
  onClick?: () => mixed,
  fontSize?: string,
  isDisabled?: boolean,
  render?: () => mixed,
};

function Button(props) {
  /*
  We have to strip out most props here so they don't get passed
  as attributes on the <button /> HTML element, which is invalid
  */
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
      {resultChildren || props.children}
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
    newProps = { fontSize, render, ...props };
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

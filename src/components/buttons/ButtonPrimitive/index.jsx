// @flow

import * as React from 'react';
import styled, { css } from 'styled-components';
import { switchProp } from 'styled-tools';
import Anchor from '../../text/Anchor';
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

const FlexWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;

  ${switchProp('size', {
    regular: css`
      min-width: 200px;
      min-height: 50px;
      padding: 15px 30px;`,
    small: css`
      min-width: 75px;
      min-height: 40px;
      padding: 10px 15px;`,
    inline: css`
      padding: 0;`,
  })};
`;

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
      <FlexWrapper size={props.size}>
        {resultChildren || props.children}
      </FlexWrapper>
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

  return (
    <Anchor {...newProps} weight="bold">
      <FlexWrapper size={props.size}>{props.children}</FlexWrapper>
    </Anchor>
  );
}

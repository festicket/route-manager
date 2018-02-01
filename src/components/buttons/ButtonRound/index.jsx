// @flow

// Lib
// -------------
import React, { type Node } from 'react';
import styled, { css } from 'styled-components';
import { prop, switchProp } from 'styled-tools';

// Components
// -------------
import { hoverColor } from '../../../utils/theme';

// Styles
// -------------
// import { Wrapper } from './styles';

// Flow Types
// -------------
type Props = {
  children?: Node,
  variant?: 'light' | 'dark' | 'grey' | 'transparent',
  href?: string,
  target?: string,
  rel?: string,
  onClick?: () => mixed,
};

function ButtonRoundComponent({
  children,
  variant,
  href,
  target,
  rel,
  onClick,
  ...props
}: Props) {
  const elementType = href && href.length > 0 ? 'a' : 'button';

  const newProps = { target, rel, onClick, ...props };

  if (elementType === 'a') {
    newProps.href = href;
  }

  return React.createElement(elementType, newProps, children);
}

const StyledButtonRoundComponent = styled(ButtonRoundComponent)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 1.6em;
  width: 1.6em;
  margin: 0 6px;
  border-radius: 50%;
  border: none;
  font-size: 19px;
  line-height: 1.55em;
  outline: none;
  cursor: pointer;

  ${switchProp('variant', {
    light: css`
      background-color: ${prop('theme.colors.white')};
      color: ${prop('theme.colors.brand.primary')};

      &:hover {
        background-color: ${props => hoverColor(props.theme.colors.white)};
      }`,
    dark: css`
      background-color: ${prop('theme.colors.brand.primary')};
      color: ${prop('theme.colors.white')};

      &:hover {
        background-color: ${props =>
          hoverColor(props.theme.colors.brand.primary)};
      }`,
    grey: css`
      background-color: ${prop('theme.colors.info')};
      color: ${prop('theme.colors.white')};

      &:hover {
        background-color: ${props => hoverColor(props.theme.colors.info)};
      }`,
  })};
`;

export default function ButtonRound({ variant = 'dark', ...props }: Props) {
  return <StyledButtonRoundComponent variant={variant} {...props} />;
}

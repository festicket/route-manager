// @flow

// Lib
// -------------
import React, { type Node } from 'react';
import styled, { css } from 'styled-components';
import { prop, switchProp } from 'styled-tools';
import { hoverColor } from '../../../utils/theme';
import breakpoint from '../../../utils/breakpoint';

// Components
// -------------

// Styles
// -------------
// import { Wrapper } from './styles';

// Flow Types
// -------------
type Props = {
  children?: string | Node,
  handleClick?: () => mixed,
  variant?: 'primary' | 'secondary' | 'facebook',
  size?: 'responsive' | 'full_width',
  href?: string,
  target?: string,
  rel?: string,
  className?: string,
  type?: 'submit' | 'reset' | 'button',
};

function BaseButtonComponent(props) {
  // const { children, handleClick, variant, size, href, target, rel, type, className } = props;
  const elementType = props.href && props.href.length > 0 ? 'a' : 'button';

  const newProps = Object.assign({}, props, {
    onClick: props.handleClick,
  });

  if (elementType === 'a') {
    newProps.href = props.href;
    newProps.target = props.target;
    newProps.rel = props.rel;
  } else {
    // Buttons need to have a type
    // If the dont them you can get strange behaviours with forms
    // because the default type for a button within a form is submit
    newProps.type = props.type;
    // Clean up props for buttons
    delete newProps.href;
    delete newProps.target;
    delete newProps.rel;
  }

  /*
  * To avoid warnings we have to delete props here.
  * These custom props should be handled in the ParentComponent (this)
  * and not passed to the standard DOM elements
  * TODO: Find a way to strip non standard props off items
  * */
  delete newProps.handleClick;
  delete newProps.variant;

  return React.createElement(elementType, newProps, props.children);
}

const StyledBaseButtonComponent = styled(BaseButtonComponent)`
  border: 0;
  border-radius: 0;
  box-sizing: border-box;
  cursor: pointer;
  display: inline-block;
  font-size: 16px;
  font-weight: ${prop('theme.fontWeight.bold')};
  line-height: 28px;
  min-height: 46px;
  outline: 0;
  padding: 0.5em 1em;
  text-align: center;
  text-decoration: none;
  width: 100%;

  ${switchProp('size', {
    responsive: breakpoint('from-sm')`
      width: initial;`,
  })};

  ${switchProp('variant', {
    primary: css`
      background-color: ${prop('theme.colors.brand.primary')};
      color: ${prop('theme.colors.white')};

      &:hover {
        background-color: ${props =>
          hoverColor(props.theme.colors.brand.primary)};
      }`,
    secondary: css`
      background-color: ${prop('theme.colors.brand.primaryBackground')};
      color: ${prop('theme.colors.brand.primary')};
      border: 1px solid ${prop('theme.colors.brand.primary')};

      &:hover {
        background-color: ${props =>
          hoverColor(props.theme.colors.brand.primaryBackground)};
        border-color: ${props => hoverColor(props.theme.colors.brand.primary)};
      }`,
    facebook: css`
      background-color: ${prop('theme.colors.facebook.primary')};
      color: ${prop('theme.colors.white')};

      &:hover {
        background-color: ${props =>
          hoverColor(props.theme.colors.facebook.primary)};
      }`,
  })};
`;

export default ({
  variant = 'primary',
  size = 'responsive',
  type = 'button',
  children,
  ...props
}: Props) => (
  <StyledBaseButtonComponent
    variant={variant}
    size={size}
    type={type}
    {...props}
  >
    {children}
  </StyledBaseButtonComponent>
);

// @flow

// Lib
// -------------
import * as React from 'react';
import styled, { css } from 'styled-components';
import { switchProp, prop, ifProp } from 'styled-tools';
import { darken } from 'polished';

// Flow Types
// -------------
type Props = {
  children?: React.Node,
  to?: string,
  href?: string,
  hash?: string,
  external?: boolean,
  tel?: string,
  email?: string,
  className?: string,
  variant?: 'standard' | 'inherit' | 'hyperlink' | 'navigation',
  target?: string,
  onClick?: (e: SyntheticMouseEvent<*>) => mixed,
  onTabFocus?: (e: SyntheticKeyboardEvent<*>) => mixed,
  element?: any,
  anchorRef?: () => mixed,
  itemProp?: string,
};

const TAB_KEY_CODE = 9;

function AnchorComponent(props) {
  const {
    element: ComposedElement,
    anchorRef,
    external,
    children,
    to,
    hash,
    tel,
    email,
    className,
    target,
    onClick,
    onTabFocus,
    itemProp,
  } = props;

  const onKeyUp = e =>
    e.keyCode === TAB_KEY_CODE && typeof onTabFocus === 'function'
      ? onTabFocus(e)
      : true;

  if (hash) {
    return (
      <a
        ref={anchorRef}
        href={`#${hash}`}
        className={className}
        onClick={onClick}
        onKeyUp={onKeyUp}
      >
        {children}
      </a>
    );
  } else if (tel) {
    return (
      <a href={`tel:${tel}`} className={className} onClick={onClick}>
        {children}
      </a>
    );
  } else if (email) {
    return (
      <a href={`mailto:${email}`} className={className} onClick={onClick}>
        {children}
      </a>
    );
  } else if (external) {
    return (
      <a
        href={to}
        className={className}
        target={target}
        rel="noopener noreferrer"
        onClick={onClick}
        itemProp={itemProp}
      >
        {children}
      </a>
    );
  }

  return <ComposedElement {...props}>{children}</ComposedElement>;
}

const StyledAnchorComponent = styled(AnchorComponent)`
  cursor: pointer;
  text-decoration: none;
  ${switchProp('variant', {
    standard: css`
      color: ${prop('theme.colors.brand.primary')};`,
    navigation: css`
      display: inline-block;
      white-space: nowrap;
      font-weight: ${prop('theme.fontWeight.bold')};
      padding: 25px 0 20px;
      border-bottom: 5px solid transparent;
      margin-right: 40px;

      ${ifProp(
        { active: true },
        css`
          color: ${prop('theme.colors.greyscale.black')};
          border-bottom-color: ${prop('theme.colors.brand.primary')};
        `,
        css`
          color: ${prop('theme.colors.greyscale.dark')};

          &:hover,
          &:focus {
            color: ${({ theme }) => darken(0.1, theme.colors.greyscale.dark)};
          }
        `,
      )};`,
    hyperlink: css`
      text-decoration: underline;
      text-decoration-skip: ink;
      font-weight: ${prop('theme.fontWeight.regular')};
      color: ${prop('theme.colors.greyscale.black')};`,
    inherit: css`
      color: inherit;`,
  })};
`;

export default function Anchor({
  element = 'a',
  variant = 'standard',
  target = '_blank',
  children,
  ...rest
}: Props) {
  return (
    <StyledAnchorComponent
      element={element}
      variant={variant}
      target={target}
      {...rest}
    >
      {children}
    </StyledAnchorComponent>
  );
}

// @flow

import * as React from 'react';
import styled, { css } from 'styled-components';
import { switchProp, prop, ifProp } from 'styled-tools';
import { darken } from 'polished';

type Props = {
  anchorRef?: () => mixed,
  className?: string,
  children?: React.Node,
  element: any,
  email?: string,
  external?: boolean,
  hash?: string,
  href?: string,
  itemProp?: string,
  onTabFocus?: (e: SyntheticKeyboardEvent<*>) => mixed,
  onClick?: (e: SyntheticMouseEvent<*>) => mixed,
  target?: string,
  tel?: string,
  to?: string,
  variant?: 'standard' | 'inherit' | 'hyperlink' | 'navigation',
};

const TAB_KEY_CODE = 9;

function AnchorComponent(props: Props) {
  // `element` is renamed here in order to invoke it as a JSX component.
  const {
    anchorRef,
    className,
    children,
    element: ComposedElement,
    email,
    external,
    hash,
    itemProp,
    onClick,
    onTabFocus,
    target,
    tel,
    to,
  } = props;

  // The browser and React don't have an event for an element becoming focused
  // ONLY as a result of keyboard tabbing, so we must listen for the tab
  // key-up-press event on the element to call the `onTabFocus` callback.
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

/*
TODO: The standard variant is the pre-rebranding style, and the hyperlink variant
is the post-rebranding style. Once rebranding has been fully rolled out, the
hyperlink styles should replace standard.
*/
const Anchor = styled(AnchorComponent)`
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

Anchor.defaultProps = {
  element: 'a',
  target: '_blank',
  variant: 'standard',
};

export default Anchor;

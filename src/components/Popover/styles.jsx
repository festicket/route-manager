// @flow

import * as React from 'react';

/*
TODO: Replace react-css-transition with the official react-transition-group
package, once React 16 issues have been resolved;

https://github.com/reactjs/react-transition-group/issues/284
https://github.com/reactjs/react-transition-group/issues/285
*/
import { CSSTransition, transit } from 'react-css-transition';
import styled from 'styled-components';
import { prop } from 'styled-tools';
import breakpoint from 'src/utils/breakpoint';
import theme from 'src/utils/theme';

const duration = parseInt(theme.animationDuration.short, 10);
const easing = 'ease-out';
const offset = 15;

type TransitionProps = {
  shown: boolean,
  children: React.Node,
  style: {
    top?: number,
    left?: number,
    right?: number,
  },
};

/*
On mobile, popover content should always be flush with the horizontal
sides of the viewport, so override the calculated left/right.
*/
const StyledCSSTransition = styled(CSSTransition)`
  ${breakpoint('sm')`
    left: 0 !important;
    right: 0 !important;
  `};
`;

export const PopoverTransition = ({
  shown,
  children,
  style,
}: TransitionProps) => (
  <StyledCSSTransition
    active={shown}
    style={{
      position: 'absolute',
      ...style,
    }}
    defaultStyle={{
      display: 'none',
      opacity: 0,
      transform: `translateY(${offset}px)`,
    }}
    enterInitStyle={{
      display: 'inline-block',
      opacity: 0,
      transform: `translateY(${offset}px)`,
    }}
    enterStyle={{
      opacity: transit(1, duration, easing),
      transform: transit('translateY(0)', duration, easing),
    }}
    leaveStyle={{
      opacity: transit(0, duration, easing),
      transform: transit(`translateY(${offset}px)`, duration, easing),
    }}
    activeStyle={{ opacity: 1, transform: 'translateY(0)' }}
  >
    {children}
  </StyledCSSTransition>
);

export const PopoverContent = styled.div`
  display: block;
  text-align: left;
  background: ${prop('theme.colors.white')};
  padding: 20px;
  box-shadow: 0 2px 40px 0 ${prop('theme.colors.shadowColor')};
`;

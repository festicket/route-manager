// @flow

import * as React from 'react';
import { CSSTransition, transit } from 'react-css-transition';
import styled from 'styled-components';
import { prop } from 'styled-tools';
import theme from '../../utils/theme';

const duration = parseInt(theme.animationDuration.short, 10);
const easing = 'ease-out';
const offset = 15;

type TransitionProps = {
  shown: boolean,
  children: React.Node,
  style: {
    position: 'absolute' | 'relative' | 'fixed',
    top?: number,
    left?: number,
    right?: number,
  },
};

export const PopoverTransition = ({
  shown,
  children,
  style,
}: TransitionProps) => (
  <CSSTransition
    active={shown}
    style={style}
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
  </CSSTransition>
);

export const PopoverContent = styled.div`
  display: inline-block;
  text-align: left;
  background: ${prop('theme.colors.white')};
  padding: 20px;
  box-shadow: 0 2px 40px 0 ${prop('theme.colors.shadowColor')};
`;

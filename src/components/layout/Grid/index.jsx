// @flow

import * as React from 'react';
import styled from 'styled-components';
import breakpoint from 'src/utils/breakpoint';
import Primitive, {
  type PrimitiveTypes,
} from 'src/components/layout/Primitive';

import transformWidthNumber from './utils/transformWidthNumber';

type BreakpointsShape = {|
  xs?: number,
  sm?: number,
  md?: number,
  lg?: number,
  xlg?: number,
|};

type GridElementTypes = {|
  element?: 'article' | 'section' | 'div' | 'header' | 'footer',
  children?: React.Node,
  width?: number | BreakpointsShape,
|};

type GridTypes = PrimitiveTypes;

const gap = 30;

const GridElementWidth = (props: GridElementTypes) => {
  /*
  If width is passed as an object of breakpoints,
  loop through each entry and produce media queries
  from the breakpoint module. Otherwise, pass the value to
  `transformWidthNumber` and return the new width CSS rule.
  */
  if (typeof props.width === 'object') {
    return Object.entries(props.width).map(
      ([breakpointKey, breakpointValue]) => {
        const width = transformWidthNumber(parseFloat(breakpointValue));

        const rules = {
          width,
        };

        return breakpoint(`from-${breakpointKey}`)`
          ${rules}
        `;
      },
    );
  }

  const width = transformWidthNumber(props.width);

  return {
    width,
  };
};

export const GridElement: React.ComponentType<GridElementTypes> = styled(
  Primitive,
)`
  padding: ${gap / 2}px 0;
  box-sizing: border-box;
  ${GridElementWidth};

  ${breakpoint('from-sm')`
    padding: ${gap / 2}px;
  `};
`;

export const Grid: React.ComponentType<GridTypes> = styled(Primitive)`
  margin: -${gap / 2}px 0;

  ${breakpoint('from-sm')`
    display: flex;
    flex-wrap: wrap;
    margin: -${gap / 2}px;
  `};
`;

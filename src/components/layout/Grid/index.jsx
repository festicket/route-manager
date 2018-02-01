// Lib
// -------------
import React, { type Node } from 'react';
import styled from 'styled-components';

// Utils
// -------------
import breakpoint from '../../../utils/breakpoint';
import transformWidthNumber from './utils/transformWidthNumber';

// Components
// -------------
import Primitive, { type PrimitiveTypes } from '../Primitive';

// Flow Types
// -------------
type BreakpointsShape = {|
  xs?: number,
  sm?: number,
  md?: number,
  lg?: number,
  xlg?: number,
|};

type GridElementTypes = {|
  element?: 'article' | 'section' | 'div' | 'header' | 'footer',
  children?: Node,
  width: number | BreakpointsShape,
|};

type GridTypes = PrimitiveTypes;

// Module
// -------------
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

const StyledGridElement = styled(Primitive)`
  padding: ${gap / 2}px 0;
  box-sizing: border-box;
  ${GridElementWidth};

  ${breakpoint('from-sm')`
    padding: ${gap / 2}px;
  `};
`;

export const GridElement = (props: GridElementTypes) => (
  <StyledGridElement {...props} />
);

const StyledGrid = styled(Primitive)`
  margin: -${gap / 2}px 0;

  ${breakpoint('from-sm')`
    display: flex;
    flex-wrap: wrap;
    margin: -${gap / 2}px;
  `};
`;

export const Grid = (props: GridTypes) => <StyledGrid {...props} />;

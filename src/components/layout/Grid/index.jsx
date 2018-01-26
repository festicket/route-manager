import React, { type Node } from 'react';
import styled from 'styled-components';
import breakpoint from '../../../utils/breakpoint';
import transformWidthNumber from './utils/transformWidthNumber';

const gap = 30;

type BreakpointWidth = number | string;

type BreakpointsShape = {|
  xs?: BreakpointWidth,
  sm?: BreakpointWidth,
  md?: BreakpointWidth,
  lg?: BreakpointWidth,
  xlg?: BreakpointWidth,
|};

type GridElementTypes = {
  width: BreakpointWidth | BreakpointsShape,
};

const GridElementWidth = (props: GridElementTypes) => {
  if (typeof props.width === 'object') {
    return Object.entries(props.width).map(bp => {
      const width = transformWidthNumber(bp[1]);

      const rules = {
        width,
      };

      return breakpoint(`from-${bp[0]}`)`
        ${rules}
      `;
    });
  }

  const width = transformWidthNumber(props.width);

  return {
    width,
  };
};

// Takes props object but we are only interested in passing className.
// Otherwise we will get annoying warnings about invalid props on html elements.
function stripUnwantedProps({ className }: any) {
  return { className };
}

type PrimitiveTypes = {
  element?: 'article' | 'section' | 'div' | 'header' | 'footer',
  children?: Node,
};

function Primitive({ element = 'div', children, ...props }: PrimitiveTypes) {
  return React.createElement(element, stripUnwantedProps(props), children);
}

Primitive.defaultProps = {
  element: 'div',
  children: undefined,
};

const StyledGridElement = styled(Primitive)`
  padding: ${gap / 2}px 0;
  ${breakpoint('from-sm')`
    padding: ${gap / 2}px;
  `};
  ${GridElementWidth};
`;

export const GridElement = (props: GridElementTypes) => (
  <StyledGridElement {...props} />
);

export const Grid = styled(Primitive)`
  margin: -${gap / 2}px 0;

  ${breakpoint('from-sm')`
    display: flex;
    flex-wrap: wrap;
    margin: -${gap / 2}px;
  `};
`;

import React, { type Node } from 'react';
import styled from 'styled-components';
import breakpoint from '../../../utils/breakpoint';
import transformWidthNumber from './utils/transformWidthNumber';

const gap = 30;

type BreakpointsShape = {|
  xs?: number,
  sm?: number,
  md?: number,
  lg?: number,
  xlg?: number,
|};

type GridElementTypes = {
  width: number | BreakpointsShape,
};

const GridElementWidth = (props: GridElementTypes) => {
  if (typeof props.width === 'object') {
    return Object.entries(props.width).map(
      ([breakpointKey, breakpointValue]) => {
        const width = transformWidthNumber(parseInt(breakpointValue, 10));

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

// Takes props object but we are only interested in passing className.
// Otherwise we will get annoying warnings about invalid props on html elements.
function stripUnwantedProps(props: {}, keys: Array<string>): {} {
  const filteredProps = {};

  keys.forEach((key: string) => {
    if (key in props) {
      filteredProps[key] = props[key];
    }
  });

  return filteredProps;
}

type PrimitiveTypes = {
  element?: 'article' | 'section' | 'div' | 'header' | 'footer',
  children?: Node,
};

function Primitive(props: PrimitiveTypes) {
  const { element = 'div', children, ...rest } = props;
  return React.createElement(
    element,
    stripUnwantedProps(rest, ['className', 'id']),
    children,
  );
}

Primitive.defaultProps = {
  element: 'div',
  children: undefined,
};

const StyledGridElement = styled(Primitive)`
  padding: ${gap / 2}px 0;
  box-sizing: border-box;

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

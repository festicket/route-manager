import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import breakpoint from '../../../breakpoints/index';
import transformWidthNumber from './utils/transformWidthNumber';

const gap = 30;

const GridElementWidth = props => {
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

Primitive.propTypes = {
  element: PropTypes.oneOf(['article', 'section', 'div', 'header', 'footer']),
  children: PropTypes.node,
};

Primitive.defaultProps = {
  element: 'div',
  children: undefined,
};

// Takes props object but we are only interested in passing className.
// Otherwise we will get annoying warnings about invalid props on html elements.
function stripUnwantedProps({ className }) {
  return { className };
}

function Primitive({ element, children, ...props }) {
  //eslint-disable-line
  return React.createElement(element, stripUnwantedProps(props), children);
}

export const GridElement = styled(Primitive)`
  padding: ${gap / 2}px 0;
  ${breakpoint('from-sm')`
    padding: ${gap / 2}px;
  `};
  ${GridElementWidth};
`;

const breakpointWidthType = PropTypes.oneOfType([
  PropTypes.number,
  PropTypes.string,
]);

const breakpointsShape = PropTypes.shape({
  xs: breakpointWidthType,
  sm: breakpointWidthType,
  md: breakpointWidthType,
  lg: breakpointWidthType,
  xlg: breakpointWidthType,
});

GridElement.propTypes = {
  width: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
    breakpointsShape,
  ]),
};

GridElement.defaultProps = {
  width: 1,
};

export const Grid = styled(Primitive)`
  margin: -${gap / 2}px 0;

  ${breakpoint('from-sm')`
    display: flex;
    flex-wrap: wrap;
    margin: -${gap / 2}px;
  `};
`;

// @flow

// Breakpoints are defined as a map of (name: minimum width)
// https://zpl.io/25RJPjV
const breakpoints = {
  xs: 0, // officially we support a minimum width of 320px
  sm: 569,
  md: 769,
  lg: 961,
  xlg: 1221, // DEPRECATED
};

export default breakpoints;

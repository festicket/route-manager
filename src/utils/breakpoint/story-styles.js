// @flow

import styled from 'styled-components';
import breakpoint from 'src/utils/breakpoint';

export const WrapperHeading = styled.div`
  .current {
    display: none;
  }
  ${breakpoint('xs')`
  .xs-only {
    display: inline;
  }
  `};
  ${breakpoint('sm')`
  .sm-only {
    display: inline;
  }
  `};
  ${breakpoint('md')`
  .md-only {
    display: inline;
  }
  `};
  ${breakpoint('lg')`
  .lg-only {
    display: inline;
  }
  `};
`;
export const Wrapper = styled.div`
  font-family: monospace;
  font-weight: 900;
  display: flex;
  flex-wrap: wrap;

  > * {
    display: flex;
    flex-basis: 100%;

    ${breakpoint('to-md')`
      flex-direction: column;
    `};
  }
  > * > * {
    background-color: red;
    margin-bottom: 5px;
    display: flex;
    flex-grow: 1;
    justify-content: center;
    align-items: center;
    color: white;

    ${breakpoint('from-md')`
      &:not(:last-child) {
        margin-right: 10px;
      };
    `};
  }

  ${breakpoint('xs')`
  .xs {
    background-color: green;
  }
  `};
  ${breakpoint('sm')`
  .sm {
    background-color: green;
  }
  `};
  ${breakpoint('md')`
  .md {
    background-color: green;
  }
  `};
  ${breakpoint('lg')`
  .lg {
    background-color: green;
  }
  `};
  ${breakpoint('from-sm')`
  .from-sm {
    background-color: green;
  }
  `};
  ${breakpoint('from-md')`
  .from-md {
    background-color: green;
  }
  `};
  ${breakpoint('from-lg')`
  .from-lg {
    background-color: green;
  }
  `};
  ${breakpoint('to-sm')`
  .to-sm {
    background-color: green;
  }
  `};
  ${breakpoint('to-md')`
  .to-md {
    background-color: green;
  }
  `};
  ${breakpoint('to-lg')`
  .to-lg {
    background-color: green;
  }
  `};
`;

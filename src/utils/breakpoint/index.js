// @flow

import { css } from 'styled-components';

// Breakpoints are defined as a map of (name: minimum width)
// https://zpl.io/25RJPjV
const bp = {
  xs: 0, // officially we support a minimum width of 320px
  sm: 569,
  md: 769,
  lg: 961,
  xlg: 1221, // DEPRECATED
};

export const breakpoints = bp;

export function media(label: string) {
  return () => {
    switch (label) {
      case 'media-xs':
        return `@media (max-width: ${bp.sm - 1}px)`;

      case 'media-sm':
        return `@media (min-width: ${bp.sm}px) and (max-width: ${bp.md - 1}px)`;

      case 'media-md':
        return `@media (min-width: ${bp.md}px) and (max-width: ${bp.lg - 1}px)`;

      case 'media-lg':
        return `@media (min-width: ${bp.lg}px)`;

      case 'media-to-sm':
        return `@media (max-width: ${bp.sm - 1}px)`;

      case 'media-to-md':
        return `@media (max-width: ${bp.md - 1}px)`;

      case 'media-to-lg':
        return `@media (max-width: ${bp.lg - 1}px)`;

      case 'media-from-sm':
        return `@media (min-width: ${bp.sm}px)`;

      case 'media-from-md':
        return `@media (min-width: ${bp.md}px)`;

      case 'media-from-lg':
        return `@media (min-width: ${bp.lg}px)`;

      default:
        return null;
    }
  };
}

export default function breakpoint(label: string) {
  return (...args: any) => () => {
    switch (label) {
      case 'xs':
        return css`
          @media (max-width: ${bp.sm - 1}px) {
            ${css(...args)};
          }
        `;

      case 'sm':
        return css`
          @media (min-width: ${bp.sm}px) and (max-width: ${bp.md - 1}px) {
            ${css(...args)};
          }
        `;

      case 'md':
        return css`
          @media (min-width: ${bp.md}px) and (max-width: ${bp.lg - 1}px) {
            ${css(...args)};
          }
        `;

      case 'lg':
        return css`
          @media (min-width: ${bp.lg}px) {
            ${css(...args)};
          }
        `;

      case 'to-sm':
        return css`
          @media (max-width: ${bp.sm - 1}px) {
            ${css(...args)};
          }
        `;

      case 'to-md':
        return css`
          @media (max-width: ${bp.md - 1}px) {
            ${css(...args)};
          }
        `;

      case 'to-lg':
        return css`
          @media (max-width: ${bp.lg - 1}px) {
            ${css(...args)};
          }
        `;

      case 'from-sm':
        return css`
          @media (min-width: ${bp.sm}px) {
            ${css(...args)};
          }
        `;

      case 'from-md':
        return css`
          @media (min-width: ${bp.md}px) {
            ${css(...args)};
          }
        `;

      case 'from-lg':
        return css`
          @media (min-width: ${bp.lg}px) {
            ${css(...args)};
          }
        `;

      // Deprecated
      case 'from-xlg':
        return css`
          @media (min-width: ${bp.xlg}px) {
            ${css(...args)};
          }
        `;
      default:
        return null;
    }
  };
}

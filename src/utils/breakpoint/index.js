// @flow

import { css } from 'styled-components';

import bp from 'src/utils/breakpoints';

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

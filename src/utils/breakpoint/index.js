// @flow

import { css } from 'styled-components';

import minWidths from 'src/utils/min-widths';

export default function breakpoint(label: string) {
  return (...args: any) => () => {
    switch (label) {
      case 'xs':
        return css`
          @media (max-width: ${minWidths.sm - 1}px) {
            ${css(...args)};
          }
        `;

      case 'sm':
        return css`
          @media (min-width: ${minWidths.sm}px) and (max-width: ${minWidths.md -
              1}px) {
            ${css(...args)};
          }
        `;

      case 'md':
        return css`
          @media (min-width: ${minWidths.md}px) and (max-width: ${minWidths.lg -
              1}px) {
            ${css(...args)};
          }
        `;

      case 'lg':
        return css`
          @media (min-width: ${minWidths.lg}px) {
            ${css(...args)};
          }
        `;

      case 'to-sm':
        return css`
          @media (max-width: ${minWidths.sm - 1}px) {
            ${css(...args)};
          }
        `;

      case 'to-md':
        return css`
          @media (max-width: ${minWidths.md - 1}px) {
            ${css(...args)};
          }
        `;

      case 'to-lg':
        return css`
          @media (max-width: ${minWidths.lg - 1}px) {
            ${css(...args)};
          }
        `;

      case 'from-sm':
        return css`
          @media (min-width: ${minWidths.sm}px) {
            ${css(...args)};
          }
        `;

      case 'from-md':
        return css`
          @media (min-width: ${minWidths.md}px) {
            ${css(...args)};
          }
        `;

      case 'from-lg':
        return css`
          @media (min-width: ${minWidths.lg}px) {
            ${css(...args)};
          }
        `;

      // Deprecated
      case 'from-xlg':
        return css`
          @media (min-width: ${minWidths.xlg}px) {
            ${css(...args)};
          }
        `;
      default:
        return null;
    }
  };
}

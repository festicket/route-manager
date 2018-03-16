// @flow

import { css } from 'styled-components';
import theme from 'src/utils/theme';

export default function breakpoint(label: string) {
  return (...args: any) => () => {
    switch (label) {
      // The bug in 'sm', 'md' and 'lg' affects `react-app` and `react-ui-components`

      case 'sm': // there is a bug in original implementation - this should be 'xs'
        return css`
          @media (max-width: ${theme.breakpoints.sm - 1}px) {
            ${css(...args)};
          }
        `;

      case 'md': // there is a bug in orinial implementation - this should be 'sm'
        return css`
          @media (min-width: ${theme.breakpoints.sm}px) and (max-width: ${theme
              .breakpoints.md - 1}px) {
            ${css(...args)};
          }
        `;

      case 'lg': // This should be replaces with the 'lg' media query below. Left for now to not break anything
        return css`
          @media (min-width: ${theme.breakpoints.md}px) {
            ${css(...args)};
          }
        `;

      // until above bugs are fixed, this can't be used.
      // case 'md':
      //   return css`
      //     @media (min-width: ${theme.breakpoints.md}px) and (max-width: ${theme
      //         .breakpoints.lg - 1}px) {
      //       ${css(...args)};
      //     }
      //   `;

      // until above bugs are fixed, this can't be used.
      // case 'lg':
      //   return css`
      //     @media (min-width: ${theme.breakpoints.lg}px) {
      //       ${css(...args)};
      //     }
      //   `;

      case 'to-sm':
        return css`
          @media (max-width: ${theme.breakpoints.sm - 1}px) {
            ${css(...args)};
          }
        `;

      case 'to-md':
        return css`
          @media (max-width: ${theme.breakpoints.md - 1}px) {
            ${css(...args)};
          }
        `;

      case 'to-lg':
        return css`
          @media (max-width: ${theme.breakpoints.lg - 1}px) {
            ${css(...args)};
          }
        `;

      case 'from-sm':
        return css`
          @media (min-width: ${theme.breakpoints.sm}px) {
            ${css(...args)};
          }
        `;

      case 'from-md':
        return css`
          @media (min-width: ${theme.breakpoints.md}px) {
            ${css(...args)};
          }
        `;

      case 'from-lg':
        return css`
          @media (min-width: ${theme.breakpoints.lg}px) {
            ${css(...args)};
          }
        `;

      case 'from-xlg':
        return css`
          @media (min-width: ${theme.breakpoints.xlg}px) {
            ${css(...args)};
          }
        `;
      default:
        return null;
    }
  };
}

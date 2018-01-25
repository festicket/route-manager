/* eslint consistent-return: 0 default-case: 0 */
/* stylelint-disable */

import { css } from 'styled-components';
import theme from '../theme';

export default function breakpoint(label: string) {
  return (...args: any) => () => {
    switch (label) {
      case 'xs':
        return css`
          @media (max-width: ${theme.breakpoints.xs}px) {
            ${css(...args)};
          }
        `;

      case 'sm':
        return css`
          @media (min-width: ${theme.breakpoints.xs}px) and (max-width: ${theme
              .breakpoints.sm}px) {
            ${css(...args)};
          }
        `;

      case 'md':
        return css`
          @media (min-width: ${theme.breakpoints.sm}px) and (max-width: ${theme
              .breakpoints.md}px) {
            ${css(...args)};
          }
        `;

      case 'lg':
        return css`
          @media (min-width: ${theme.breakpoints.md}px) {
            ${css(...args)};
          }
        `;

      case 'to-sm':
        return css`
          @media (max-width: ${theme.breakpoints.sm}px) {
            ${css(...args)};
          }
        `;

      case 'to-md':
        return css`
          @media (max-width: ${theme.breakpoints.md}px) {
            ${css(...args)};
          }
        `;

      case 'to-lg':
        return css`
          @media (max-width: ${theme.breakpoints.lg}px) {
            ${css(...args)};
          }
        `;

      case 'from-xs':
        return css`
          @media (min-width: ${theme.breakpoints.xs}px) {
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
    }
  };
}

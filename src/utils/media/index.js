// @flow

import bp from 'src/utils/breakpoints';

export default function media(label: string) {
  return () => {
    switch (label) {
      case 'xs':
        return `@media (max-width: ${bp.sm - 1}px)`;

      case 'sm':
        return `@media (min-width: ${bp.sm}px) and (max-width: ${bp.md - 1}px)`;

      case 'md':
        return `@media (min-width: ${bp.md}px) and (max-width: ${bp.lg - 1}px)`;

      case 'lg':
        return `@media (min-width: ${bp.lg}px)`;

      case 'to-sm':
        return `@media (max-width: ${bp.sm - 1}px)`;

      case 'to-md':
        return `@media (max-width: ${bp.md - 1}px)`;

      case 'to-lg':
        return `@media (max-width: ${bp.lg - 1}px)`;

      case 'from-sm':
        return `@media (min-width: ${bp.sm}px)`;

      case 'from-md':
        return `@media (min-width: ${bp.md}px)`;

      case 'from-lg':
        return `@media (min-width: ${bp.lg}px)`;

      default:
        return null;
    }
  };
}

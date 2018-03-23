// @flow

import minWidths from 'src/utils/min-widths';

export default function media(label: string) {
  return () => {
    switch (label) {
      case 'xs':
        return `@media (max-width: ${minWidths.sm - 1}px)`;

      case 'sm':
        return `@media (min-width: ${
          minWidths.sm
        }px) and (max-width: ${minWidths.md - 1}px)`;

      case 'md':
        return `@media (min-width: ${
          minWidths.md
        }px) and (max-width: ${minWidths.lg - 1}px)`;

      case 'lg':
        return `@media (min-width: ${minWidths.lg}px)`;

      case 'to-sm':
        return `@media (max-width: ${minWidths.sm - 1}px)`;

      case 'to-md':
        return `@media (max-width: ${minWidths.md - 1}px)`;

      case 'to-lg':
        return `@media (max-width: ${minWidths.lg - 1}px)`;

      case 'from-sm':
        return `@media (min-width: ${minWidths.sm}px)`;

      case 'from-md':
        return `@media (min-width: ${minWidths.md}px)`;

      case 'from-lg':
        return `@media (min-width: ${minWidths.lg}px)`;

      default:
        return null;
    }
  };
}

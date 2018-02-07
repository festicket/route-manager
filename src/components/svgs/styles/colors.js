// @flow
import { darken, lighten } from 'polished/lib/index';
import theme from '../../../utils/theme';

export const LIGHT = 'light';
export const DARK = 'dark';
export const BRAND = 'theme';

export const svgColors = {
  [LIGHT]: theme.colors.white,
  [DARK]: theme.colors.greyscale.black,
  [BRAND]: theme.colors.brand.primary,
};
export const functionalSvgColors = {
  [LIGHT]: theme.colors.white,
  [DARK]: theme.colors.greyscale[DARK],
  [BRAND]: theme.colors.brand.primary,
};
export const svgHoverColors = {
  [LIGHT]: darken(0.1, svgColors[LIGHT]),
  [DARK]: lighten(0.1, svgColors[DARK]),
  [BRAND]: darken(0.1, svgColors[BRAND]),
};
export const functionalSvgHoverColors = {
  [LIGHT]: darken(0.1, functionalSvgColors[LIGHT]),
  [DARK]: darken(0.1, functionalSvgColors[DARK]),
  [BRAND]: darken(0.1, functionalSvgColors[BRAND]),
};

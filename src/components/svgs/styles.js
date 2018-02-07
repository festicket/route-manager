// @flow

import { lighten, darken } from 'polished';
import theme from '../../utils/theme';

export const LIGHT = 'light';
export const DARK = 'dark';
export const BRAND = 'theme';

export const LOGO_SMALL = 'small';
export const LOGO_BIG = 'big';

const logoHeights = {
  [LOGO_SMALL]: '38px',
  [LOGO_BIG]: '68px',
};

export const logoHeightVariations = (props: { size: string }) => `
  height: ${logoHeights[props.size]};
`;

const svgColors = {
  [LIGHT]: theme.colors.white,
  [DARK]: theme.colors.greyscale.black,
  [BRAND]: theme.colors.brand.primary,
};

const svgHoverColors = {
  [LIGHT]: darken(0.1, svgColors[LIGHT]),
  [DARK]: lighten(0.1, svgColors[DARK]),
  [BRAND]: darken(0.1, svgColors[BRAND]),
};

const functionalSvgColors = {
  [LIGHT]: theme.colors.white,
  [DARK]: theme.colors.greyscale[DARK],
  [BRAND]: theme.colors.brand.primary,
};

const functionalSvgHoverColors = {
  [LIGHT]: darken(0.1, functionalSvgColors[LIGHT]),
  [DARK]: darken(0.1, functionalSvgColors[DARK]),
  [BRAND]: darken(0.1, functionalSvgColors[BRAND]),
};

export const svgColorVariations = (props: { color: string }) => `
  fill: ${svgColors[props.color]};
`;

export const svgHoverColorVariations = (props: { color: string }) => `
  cursor: pointer;
  &:hover {
    fill: ${svgHoverColors[props.color]};
  }
`;

export const functionalSvgColorVariations = (props: { color: string }) => `
  fill: ${functionalSvgColors[props.color]};
`;

export const functionalSvgHoverColorVariations = (props: { color: string }) => `
  cursor: pointer;
  &:hover {
    fill: ${functionalSvgHoverColors[props.color]};
  }
`;

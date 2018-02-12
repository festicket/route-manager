// @flow

import { css } from 'styled-components';
import { prop, switchProp, withProp } from 'styled-tools';
import { darken, lighten } from 'polished';

export const colorMixin = switchProp('color', {
  black: css`
    ${prop('theme.colors.greyscale.black')};
  `,
  grey: css`
    ${prop('theme.colors.greyscale.dark')};
  `,
  white: css`
    ${prop('theme.colors.white')};
  `,
  red: css`
    ${prop('theme.colors.danger')};
  `,
  primary: css`
    ${prop('theme.colors.brand.primary')};
  `,
  inherit: 'inherit',
});

// NOTE while we are lighening and darkening colours using withProp,
// "babel-plugin-polished" will not work.
export const hoverColorMixin = switchProp('color', {
  black: css`
    ${withProp('theme.colors.greyscale.black', lighten(0.1))};
  `,
  grey: css`
    ${withProp('theme.colors.greyscale.dark', darken(0.1))};
  `,
  white: css`
    ${withProp('theme.colors.white', darken(0.1))};
  `,
  red: css`
    ${withProp('theme.colors.danger', darken(0.1))};
  `,
  primary: css`
    ${withProp('theme.colors.brand.primary', darken(0.1))};
  `,
  inherit: 'inherit',
});

// @flow

import addonBackgrounds from '@storybook/addon-backgrounds';
import theme from "../src/utils/theme";

export const backgroundWhiteDefault = addonBackgrounds([
  { name: 'default', value: 'white', default: true  },
  { name: 'grey', value: 'lightgrey'},
  {
    name: 'theme',
    value: `${theme.colors.brand.primary}`,
  },
]);

export const backgroundGreyDefault = addonBackgrounds([
  { name: 'grey', value: 'lightgrey' , default: true },
  { name: 'default', value: 'white' },
  {
    name: 'theme',
    value: `${theme.colors.brand.primary}`,
  },
]);

export const backgroundThemeDefault = addonBackgrounds([
  { name: 'default', value: 'white' },
  { name: 'grey', value: 'lightgrey'},
  {
    name: 'theme',
    value: `${theme.colors.brand.primary}`,
    default: true
  },
]);

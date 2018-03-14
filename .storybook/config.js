// @flow

import React from 'react';
import { ThemeProvider } from 'styled-components';
import { configure, setAddon, getStorybook, addDecorator } from '@storybook/react';
import addonBackgrounds from '@storybook/addon-backgrounds';
import createPercyAddon from '@percy-io/percy-storybook';

import theme from 'src/utils/theme';

import './fonts.css';
import './global.css';

// Init percy io
const { percyAddon, serializeStories } = createPercyAddon();
setAddon(percyAddon);

addDecorator(story => <ThemeProvider theme={theme}>{story()}</ThemeProvider>);
addDecorator(addonBackgrounds([
  { name: 'white', value: `${theme.colors.white}`, default: true },
  { name: 'grey', value: `${theme.colors.greyscale.grey}` },
  { name: 'theme', value: `${theme.colors.brand.primary}` },
]));


// reguire in all of our story.jsx files
const req = require.context('../src/', true, /story\.jsx$/);
configure(() => req.keys().forEach(req), module);

serializeStories(getStorybook);

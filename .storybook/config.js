import React from 'react';
import { configure, addDecorator } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import theme from '../src/utils/theme';
import { configure, setAddon, getStorybook } from '@storybook/react';
import createPercyAddon from '@percy-io/percy-storybook';

// Init percy io
const { percyAddon, serializeStories } = createPercyAddon();
setAddon(percyAddon);

addDecorator(story => <ThemeProvider theme={theme}>{story()}</ThemeProvider>);

// reguire in all of our story.jsx files
const req = require.context('../src/', true, /story\.jsx$/);
configure(() => req.keys().forEach(req), module);

serializeStories(getStorybook);

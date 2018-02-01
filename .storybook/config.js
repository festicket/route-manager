import React from 'react';
import { configure, addDecorator, setAddon, getStorybook } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import createPercyAddon from '@percy-io/percy-storybook';
import theme from '../src/utils/theme';

// Init percy io
const { percyAddon, serializeStories } = createPercyAddon();
setAddon(percyAddon);

addDecorator(story => <ThemeProvider theme={theme}>{story()}</ThemeProvider>);

// reguire in all of our story.jsx files
const req = require.context('../src/', true, /story\.jsx$/);
configure(() => req.keys().forEach(req), module);

serializeStories(getStorybook);

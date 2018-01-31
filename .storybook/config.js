import React from 'react';
import { configure, addDecorator } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import theme from '../src/utils/theme';

const req = require.context('../src/', true, /story\.jsx$/);

addDecorator(story => <ThemeProvider theme={theme}>{story()}</ThemeProvider>);

function loadStories() {
  req.keys().forEach(req);
}

configure(loadStories, module);

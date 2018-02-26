// @flow

import React from 'react';
import { ThemeProvider } from 'styled-components';
import renderer from 'react-test-renderer';
import theme from '../theme';

export function renderWithTheme(component: any) {
  return renderer.create(
    <ThemeProvider theme={theme}>{component}</ThemeProvider>,
  );
}

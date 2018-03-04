// @flow

import React from 'react';
import { ChevronButton } from '@festicket/react-ui-components';
import { renderWithTheme } from 'src/utils/testing';

describe('<ChevronButton />', () => {
  test('as button', () => {
    const tree = renderWithTheme(
      <ChevronButton element="button" direction="right" />,
    );
    expect(tree).toMatchSnapshot();
  });
  test('as anchor', () => {
    const tree = renderWithTheme(
      <ChevronButton element="a" direction="right" />,
    );
    expect(tree).toMatchSnapshot();
  });
});

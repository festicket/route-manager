// @flow

import React from 'react';
import { CloseButton } from '@festicket/react-ui-components';
import { renderWithTheme } from 'src/tests/utils';

describe('<CloseButton />', () => {
  test('as button', () => {
    const tree = renderWithTheme(<CloseButton element="button" />);
    expect(tree).toMatchSnapshot();
  });
  test('as anchor', () => {
    const tree = renderWithTheme(<CloseButton element="a" />);
    expect(tree).toMatchSnapshot();
  });
});

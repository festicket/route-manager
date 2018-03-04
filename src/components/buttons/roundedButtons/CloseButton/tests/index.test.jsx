// @flow

import React from 'react';
import { RoundedCloseButton } from '@festicket/react-ui-components';
import { renderWithTheme } from 'src/utils/testing/index';

describe('<RoundedCloseButton />', () => {
  test('as button', () => {
    const tree = renderWithTheme(<RoundedCloseButton element="button" />);
    expect(tree).toMatchSnapshot();
  });
  test('as anchor', () => {
    const tree = renderWithTheme(<RoundedCloseButton element="a" />);
    expect(tree).toMatchSnapshot();
  });
});

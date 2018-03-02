// @flow

import React from 'react';
import { RoundedChevronButton } from '@festicket/react-ui-components';
import { renderWithTheme } from 'src/utils/testing';

describe('<RoundedChevronButton />', () => {
  test('with initial props', () => {
    const tree = renderWithTheme(<RoundedChevronButton direction="right" />);
    expect(tree).toMatchSnapshot();
  });
});

// @flow

import React from 'react';
import { RoundedSVGButton } from '@festicket/react-ui-components';
import { renderWithTheme } from 'src/utils/testing';

describe('<RoundedSVGButton />', () => {
  test('with initial props', () => {
    const tree = renderWithTheme(<RoundedSVGButton icon="right" />);
    expect(tree).toMatchSnapshot();
  });
});

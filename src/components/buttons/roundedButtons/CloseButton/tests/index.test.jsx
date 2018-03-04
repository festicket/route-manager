// @flow

import React from 'react';
import { RoundedCloseButton } from '@festicket/react-ui-components';
import { renderWithTheme } from 'src/utils/testing/index';

describe('<RoundedCloseButton />', () => {
  test('with initial props', () => {
    const tree = renderWithTheme(<RoundedCloseButton />);
    expect(tree).toMatchSnapshot();
  });
});

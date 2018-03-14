// @flow

import React from 'react';
import { Callout } from '@festicket/react-ui-components';

import { renderWithTheme } from 'src/tests/utils';
import fixture from './fixtures';

describe('<Callout />', () => {
  test('with initial props', () => {
    const tree = renderWithTheme(<Callout>{fixture}</Callout>);
    expect(tree).toMatchSnapshot();
  });
});

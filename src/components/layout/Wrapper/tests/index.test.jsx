// @flow

import React from 'react';
import { Wrapper } from '@festicket/react-ui-components';
import { renderWithTheme } from 'src/utils/testing';

describe('<Wrapper />', () => {
  test('with initial props', () => {
    const tree = renderWithTheme(
      <Wrapper>
        <span>Content</span>
      </Wrapper>,
    );
    expect(tree).toMatchSnapshot();
  });

  test('with normal size', () => {
    const tree = renderWithTheme(
      <Wrapper size="normal">
        <span>Content</span>
      </Wrapper>,
    );
    expect(tree).toMatchSnapshot();
  });

  test('with alternative size', () => {
    const tree = renderWithTheme(
      <Wrapper size="alternative">
        <span>Content</span>
      </Wrapper>,
    );
    expect(tree).toMatchSnapshot();
  });

  test('with full size', () => {
    const tree = renderWithTheme(
      <Wrapper size="full">
        <span>Content</span>
      </Wrapper>,
    );
    expect(tree).toMatchSnapshot();
  });
});

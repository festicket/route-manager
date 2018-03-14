// @flow

import React from 'react';
import { Container } from '@festicket/react-ui-components';
import { renderWithTheme } from 'src/tests/utils';

describe('<Container />', () => {
  test('with initial props', () => {
    const tree = renderWithTheme(
      <Container>
        <span>Content</span>
      </Container>,
    );
    expect(tree).toMatchSnapshot();
  });

  test('with normal size', () => {
    const tree = renderWithTheme(
      <Container size="normal">
        <span>Content</span>
      </Container>,
    );
    expect(tree).toMatchSnapshot();
  });

  test('with alternative size', () => {
    const tree = renderWithTheme(
      <Container size="alternative">
        <span>Content</span>
      </Container>,
    );
    expect(tree).toMatchSnapshot();
  });

  test('with full size', () => {
    const tree = renderWithTheme(
      <Container size="full">
        <span>Content</span>
      </Container>,
    );
    expect(tree).toMatchSnapshot();
  });
});

// @flow

import React from 'react';
import { Wrapper } from '@festicket/react-ui-components';
import { renderWithTheme } from '../../../../utils/testing';

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

  test('with primary slantVariant', () => {
    const tree = renderWithTheme(
      <Wrapper slantVariant="primary">
        <span>Content</span>
      </Wrapper>,
    );
    expect(tree).toMatchSnapshot();
  });

  test('with grey slantVariant', () => {
    const tree = renderWithTheme(
      <Wrapper slantVariant="grey">
        <span>Content</span>
      </Wrapper>,
    );
    expect(tree).toMatchSnapshot();
  });

  test('with white slantVariant', () => {
    const tree = renderWithTheme(
      <Wrapper slantVariant="white">
        <span>Content</span>
      </Wrapper>,
    );
    expect(tree).toMatchSnapshot();
  });

  test('with primary slantVariant and slantVerticalOffset and to-right slantHorizontalDirection', () => {
    const tree = renderWithTheme(
      <Wrapper
        size="full"
        slantVariant="primary"
        slantVerticalOffset
        slantHorizontalDirection="to-right"
      >
        <span>Content</span>
      </Wrapper>,
    );
    expect(tree).toMatchSnapshot();
  });

  test('with primary slantVariant and slantVerticalOffset and to-left slantHorizontalDirection', () => {
    const tree = renderWithTheme(
      <Wrapper
        size="full"
        slantVariant="primary"
        slantVerticalOffset
        slantHorizontalDirection="to-left"
      >
        <span>Content</span>
      </Wrapper>,
    );
    expect(tree).toMatchSnapshot();
  });
});

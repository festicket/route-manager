// @flow

import React from 'react';
import { SlantedBackground } from '@festicket/react-ui-components';
import { renderWithTheme } from 'src/tests/utils';

describe('<SlantedBackground />', () => {
  test('with initial props', () => {
    const tree = renderWithTheme(
      <SlantedBackground>
        <span>Content</span>
      </SlantedBackground>,
    );
    expect(tree).toMatchSnapshot();
  });

  test('with primary slantVariant', () => {
    const tree = renderWithTheme(
      <SlantedBackground slantVariant="primary">
        <span>Content</span>
      </SlantedBackground>,
    );
    expect(tree).toMatchSnapshot();
  });

  test('with grey slantVariant', () => {
    const tree = renderWithTheme(
      <SlantedBackground slantVariant="grey">
        <span>Content</span>
      </SlantedBackground>,
    );
    expect(tree).toMatchSnapshot();
  });

  test('with primary backgroundVariant and white slantVariant', () => {
    const tree = renderWithTheme(
      <SlantedBackground backgroundVariant="primary" slantVariant="white">
        <span>Content</span>
      </SlantedBackground>,
    );
    expect(tree).toMatchSnapshot();
  });

  test('with primary backgroundVariant and white slantVariant and slantVerticalOffset', () => {
    const tree = renderWithTheme(
      <SlantedBackground
        backgroundVariant="primary"
        slantVariant="white"
        slantVerticalOffset
      >
        <span>Content</span>
      </SlantedBackground>,
    );
    expect(tree).toMatchSnapshot();
  });

  test('with primary backgroundVariant and white slantVariant and contentVerticalOffset', () => {
    const tree = renderWithTheme(
      <SlantedBackground
        backgroundVariant="primary"
        slantVariant="white"
        contentVerticalOffset
      >
        <span>Content</span>
      </SlantedBackground>,
    );
    expect(tree).toMatchSnapshot();
  });

  test('with primary backgroundVariant and white slantVariant and slantVerticalOffset and to-left slantHorizontalDirection', () => {
    const tree = renderWithTheme(
      <SlantedBackground
        backgroundVariant="primary"
        slantVariant="white"
        slantVerticalOffset
        slantHorizontalDirection="to-left"
      >
        <span>Content</span>
      </SlantedBackground>,
    );
    expect(tree).toMatchSnapshot();
  });
});

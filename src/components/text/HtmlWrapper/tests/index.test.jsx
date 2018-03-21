// @flow

import React from 'react';
import { renderWithTheme } from 'src/tests/utils';

import { HtmlWrapper } from '@festicket/react-ui-components';

import { oneParagraph, h2AndParagraphs, variedContent } from './fixtures';

describe('<HtmlWrapper />', () => {
  test('with initial props', () => {
    const tree = renderWithTheme(<HtmlWrapper htmlString={oneParagraph} />);
    expect(tree).toMatchSnapshot();
  });

  test('with h2 and paragraphs', () => {
    const tree = renderWithTheme(<HtmlWrapper htmlString={h2AndParagraphs} />);
    expect(tree).toMatchSnapshot();
  });

  test('with varied content', () => {
    const tree = renderWithTheme(<HtmlWrapper htmlString={variedContent} />);
    expect(tree).toMatchSnapshot();
  });
});

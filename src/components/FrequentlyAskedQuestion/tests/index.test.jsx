// @flow

import React from 'react';
import { mount } from 'enzyme';
import { ThemeProvider } from 'styled-components';
import { FrequentlyAskedQuestion } from '@festicket/react-ui-components';
import theme from '../../../utils/theme';
import { renderWithTheme } from '../../../utils/testing';

const question = 'Lorem ipsum dolor sit amet';
const answer = `<p>Lorem ipsum dolor sit amet, ius tempor labore te, eu postea scriptorem
sit. Diceret saperet per ad, stet utroque quaerendum ius eu, eam zril
facilisi eu. Offendit corrumpit at eum, qui verterem scriptorem
comprehensam in. Ad eros erant dolores sit, ei cum liber fabellas.</p>`;

describe('<FrequentlyAskedQuestion />', () => {
  test('with initial props', () => {
    const tree = renderWithTheme(
      <FrequentlyAskedQuestion question={question} answer={answer} />,
    );
    expect(tree).toMatchSnapshot();
  });

  test('with openInitially', () => {
    const tree = renderWithTheme(
      <FrequentlyAskedQuestion
        question={question}
        answer={answer}
        openInitially
      />,
    );
    expect(tree).toMatchSnapshot();
  });

  test('should open on button click', () => {
    const tree = mount(
      <ThemeProvider theme={theme}>
        <FrequentlyAskedQuestion question={question} answer={answer} />
      </ThemeProvider>,
    );

    const button = tree.find('RoundedChevronButton');

    expect(tree.find('BodyWrapper').prop('open')).toBe(false);

    button.simulate('click');

    expect(tree.find('BodyWrapper').prop('open')).toBe(true);
  });
});

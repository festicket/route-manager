// @flow

import React from 'react';
import { mount } from 'enzyme';
import { ThemeProvider } from 'styled-components';
import { Details } from '@festicket/react-ui-components';

import theme from '../../../../utils/theme';
import { renderWithTheme } from '../../../../utils/testing';
import { title, body } from './fixtures';

describe('<Details />', () => {
  test('with initial props', () => {
    const tree = renderWithTheme(<Details title={title}>{body}</Details>);
    expect(tree).toMatchSnapshot();
  });

  test('with openInitially prop', () => {
    const tree = renderWithTheme(
      <Details title={title} openInitially>
        {body}
      </Details>,
    );
    expect(tree).toMatchSnapshot();
  });

  test('should open on button click', () => {
    const tree = mount(
      <ThemeProvider theme={theme}>
        <Details title={title}>{body}</Details>
      </ThemeProvider>,
    );

    const button = tree.find('RoundedChevronButton');

    expect(tree.find('BodyWrapper').prop('open')).toBe(false);

    button.simulate('click');

    expect(tree.find('BodyWrapper').prop('open')).toBe(true);
  });
});
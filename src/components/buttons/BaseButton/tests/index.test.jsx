// @flow

import React from 'react';
import { shallow } from 'enzyme';
import { BaseButton } from '@festicket/react-ui-components';
import { ThemeProvider } from 'styled-components';
import theme from '../../../../utils/theme';

describe('<BaseButton />', () => {
  test('with initial props', () => {
    const tree = shallow(
      <ThemeProvider theme={theme}>
        <BaseButton />
      </ThemeProvider>,
    )
      .first()
      .shallow();
    expect(tree).toMatchSnapshot();
  });

  test('with href', () => {
    const tree = shallow(
      <ThemeProvider theme={theme}>
        <BaseButton href="https://www.google.com" />
      </ThemeProvider>,
    )
      .first()
      .shallow();
    expect(tree).toMatchSnapshot();
  });
});

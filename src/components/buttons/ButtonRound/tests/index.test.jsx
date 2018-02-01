// @flow

import React from 'react';
import { shallow } from 'enzyme';
import { ButtonRound } from '@festicket/react-ui-components';

import { ThemeProvider } from 'styled-components';
import theme from '../../../../utils/theme';
import FacebookIcon from '../../../icons/Facebook';

describe('<ButtonRound />', () => {
  test('with initial props', () => {
    const tree = shallow(
      <ThemeProvider theme={theme}>
        <ButtonRound />
      </ThemeProvider>,
    )
      .first()
      .shallow();
    expect(tree).toMatchSnapshot();
  });

  test('with href and icon', () => {
    const tree = shallow(
      <ThemeProvider theme={theme}>
        <ButtonRound href="https://www.facebook.com/festicket">
          <FacebookIcon />
        </ButtonRound>
      </ThemeProvider>,
    )
      .first()
      .shallow();
    expect(tree).toMatchSnapshot();
  });
});

// @flow

import React from 'react';
import { shallow } from 'enzyme';
import { spy } from 'sinon';
import { LoginButton } from '@festicket/react-ui-components';
import { ThemeProvider } from 'styled-components';
import theme from '../../../../utils/theme';

describe('<LoginButton />', () => {
  test('with initial props', () => {
    const handleClick = spy();

    const tree = shallow(
      <ThemeProvider theme={theme}>
        <LoginButton handleClick={handleClick}>Log In</LoginButton>
      </ThemeProvider>,
    )
      .first()
      .shallow();

    expect(tree).toMatchSnapshot();
  });
});

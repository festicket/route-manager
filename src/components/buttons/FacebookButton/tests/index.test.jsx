// @flow

import React from 'react';
import { shallow, mount } from 'enzyme';
import { spy } from 'sinon';
import { FacebookButton } from '@festicket/react-ui-components';
import { ThemeProvider } from 'styled-components';
import theme from '../../../../utils/theme';

describe('<FacebookButton />', () => {
  test('with initial props', () => {
    const handleClick = spy();
    const tree = shallow(
      <ThemeProvider theme={theme}>
        <FacebookButton handleClick={handleClick}>
          Sign in with Facebook
        </FacebookButton>
      </ThemeProvider>,
    )
      .first()
      .shallow();
    expect(tree).toMatchSnapshot();
  });

  test('with icon', () => {
    const handleClick = spy();
    const tree = shallow(
      <ThemeProvider theme={theme}>
        <FacebookButton handleClick={handleClick} withIcon>
          Sign in with Facebook
        </FacebookButton>
      </ThemeProvider>,
    )
      .first()
      .shallow();
    expect(tree).toMatchSnapshot();
  });

  test('should call handleClick on click', () => {
    const handleClick = spy();
    const wrapper = mount(
      <ThemeProvider theme={theme}>
        <FacebookButton handleClick={handleClick} withIcon>
          Sign in with Facebook
        </FacebookButton>
      </ThemeProvider>,
    );
    expect(handleClick.callCount).toEqual(0);
    wrapper.find('button').simulate('click');
    expect(handleClick.callCount).toEqual(1);
  });
});

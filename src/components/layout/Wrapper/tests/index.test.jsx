// @flow

import React from 'react';
import { mount } from 'enzyme';
import { Wrapper } from '@festicket/react-ui-components';

describe('<Wrapper />', () => {
  test('with initial props', () => {
    const tree = mount(
      <Wrapper>
        <span>Content</span>
      </Wrapper>,
    );
    expect(tree).toMatchSnapshot();
  });

  test('with normal size', () => {
    const tree = mount(
      <Wrapper size="normal">
        <span>Content</span>
      </Wrapper>,
    );
    expect(tree).toMatchSnapshot();
  });

  test('with alternative size', () => {
    const tree = mount(
      <Wrapper size="alternative">
        <span>Content</span>
      </Wrapper>,
    );
    expect(tree).toMatchSnapshot();
  });

  test('with full size', () => {
    const tree = mount(
      <Wrapper size="full">
        <span>Content</span>
      </Wrapper>,
    );
    expect(tree).toMatchSnapshot();
  });
});

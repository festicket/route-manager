// @flow
import React from 'react';
import { mount } from 'enzyme';
import { Hyperlink } from '@festicket/react-ui-components';

describe('<Hyperlink />', () => {
  test('with initial props', () => {
    const tree = mount(<Hyperlink size="regular">Regular size test</Hyperlink>);
    expect(tree).toMatchSnapshot();
  });

  test('with element prop', () => {
    const tree = mount(<Hyperlink element="span">Small size test</Hyperlink>);
    expect(tree).toMatchSnapshot();
  });
});

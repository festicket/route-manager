// @flow

import React from 'react';
import { mount } from 'enzyme';
import TextPrimitive from '../';

describe('<TextPrimitive />', () => {
  test('with initial props', () => {
    const tree = mount(<TextPrimitive>Test initial</TextPrimitive>);
    expect(tree).toMatchSnapshot();
  });
});

describe('<Text /> primitive', () => {
  test('with default props', () => {
    const wrapper = mount(<TextPrimitive>default prop test</TextPrimitive>);
    expect(wrapper).toMatchSnapshot();
  });

  test('should render correctly based on element prop', () => {
    const wrapper = mount(
      <TextPrimitive element="h3">element prop test</TextPrimitive>,
    );
    expect(wrapper).toMatchSnapshot();
  });

  test('should render correctly based on variant prop', () => {
    const wrapper = mount(
      <TextPrimitive element="h3" variant="h2">
        variant prop test
      </TextPrimitive>,
    );
    expect(wrapper).toMatchSnapshot();
  });

  test('should render correctly based on size prop', () => {
    const wrapper = mount(
      <TextPrimitive element="p" size="tiny">
        size prop test
      </TextPrimitive>,
    );
    expect(wrapper).toMatchSnapshot();
  });

  test('should render correctly based on weight prop', () => {
    const wrapper = mount(
      <TextPrimitive element="p" weight="light">
        weight prop test
      </TextPrimitive>,
    );
    expect(wrapper).toMatchSnapshot();
  });

  test('should render correctly based on color prop', () => {
    const wrapper = mount(
      <TextPrimitive element="p" color="grey">
        color prop test
      </TextPrimitive>,
    );
    expect(wrapper).toMatchSnapshot();
  });

  test('should render correctly based on underline prop', () => {
    const wrapper = mount(
      <TextPrimitive element="p" color="grey" underline>
        underline prop test
      </TextPrimitive>,
    );
    expect(wrapper).toMatchSnapshot();
  });
});

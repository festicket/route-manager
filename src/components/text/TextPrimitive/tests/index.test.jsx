import React from 'react';
import { mount } from 'enzyme';
import { TextPrimitive } from '@festicket/react-ui-components';

describe('<TextPrimitive />', () => {
  test('with initial props', () => {
    const tree = mount(<TextPrimitive>Test</TextPrimitive>);
    expect(tree).toMatchSnapshot();
  });
});

describe('<Text /> primitive', () => {
  test('with default props', () => {
    const wrapper = mount(<TextPrimitive>default</TextPrimitive>);
    expect(wrapper).toMatchSnapshot();
  });

  test('should render correctly based on element prop', () => {
    const wrapper = mount(<TextPrimitive element="h3">default</TextPrimitive>);
    expect(wrapper).toMatchSnapshot();
  });

  test('should render correctly based on variant prop', () => {
    const wrapper = mount(
      <TextPrimitive element="h3" variant="h2">
        default
      </TextPrimitive>,
    );
    expect(wrapper).toMatchSnapshot();
  });

  test('should render correctly based on size prop', () => {
    const wrapper = mount(
      <TextPrimitive element="p" size="tiny">
        default
      </TextPrimitive>,
    );
    expect(wrapper).toMatchSnapshot();
  });

  test('should render correctly based on weight prop', () => {
    const wrapper = mount(
      <TextPrimitive element="p" weight="light">
        default
      </TextPrimitive>,
    );
    expect(wrapper).toMatchSnapshot();
  });

  test('should render correctly based on color prop', () => {
    const wrapper = mount(
      <TextPrimitive element="p" color="grey">
        default
      </TextPrimitive>,
    );
    expect(wrapper).toMatchSnapshot();
  });

  test('should render correctly based on underline prop', () => {
    const wrapper = mount(
      <TextPrimitive element="p" color="grey" underline>
        default
      </TextPrimitive>,
    );
    expect(wrapper).toMatchSnapshot();
  });
});

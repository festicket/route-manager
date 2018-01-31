import React from 'react';
import { mount } from 'enzyme';
import { ButtonPrimitive } from '@festicket/react-ui-components';

describe('<ButtonPrimitive />', () => {
  test('with initial props', () => {
    const tree = mount(<ButtonPrimitive />);
    expect(tree).toMatchSnapshot();
  });
});

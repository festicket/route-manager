import React from 'react';
import { mount } from 'enzyme';
import { BaseButton } from '@festicket/react-ui-components';

describe('<BaseButton />', () => {
  test('with initial props', () => {
    const tree = mount(<BaseButton />);
    expect(tree).toMatchSnapshot();
  });
});

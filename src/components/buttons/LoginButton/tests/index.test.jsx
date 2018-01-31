import React from 'react';
import { mount } from 'enzyme';
import { LoginButton } from '@festicket/react-ui-components';

describe('<LoginButton />', () => {
  test('with initial props', () => {
    const tree = mount(<LoginButton />);
    expect(tree).toMatchSnapshot();
  });
});

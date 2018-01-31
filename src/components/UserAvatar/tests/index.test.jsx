import React from 'react';
import { mount } from 'enzyme';
import { UserAvatar } from '@festicket/react-ui-components';

describe('<UserAvatar />', () => {
  test('with initial props', () => {
    const tree = mount(<UserAvatar />);
    expect(tree).toMatchSnapshot();
  });
});

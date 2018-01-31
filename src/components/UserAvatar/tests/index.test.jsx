import React from 'react';
import { mount } from 'enzyme';
import { UserAvatar } from '@festicket/react-ui-components';

const avatarLarge = 'http://via.placeholder.com/350x150';
const initial = 'B';

describe('<UserAvatar />', () => {
  test('with initial props', () => {
    const tree = mount(<UserAvatar />);
    expect(tree).toMatchSnapshot();
  });

  test('with avatarLarge', () => {
    const tree = mount(<UserAvatar avatarLarge={avatarLarge} />);
    expect(tree).toMatchSnapshot();
  });

  test('with initial', () => {
    const tree = mount(<UserAvatar initial={initial} />);
    expect(tree).toMatchSnapshot();
  });
});

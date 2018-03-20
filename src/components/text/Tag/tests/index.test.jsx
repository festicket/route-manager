// @flow

import React from 'react';
import { mount } from 'enzyme';
import { Tag } from '@festicket/react-ui-components';

describe('<Tag />', () => {
  test('with initial props', () => {
    const tree = mount(<Tag>Children</Tag>);
    expect(tree).toMatchSnapshot();
  });
});

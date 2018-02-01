// @flow

import React from 'react';
import { mount } from 'enzyme';
import { FacebookButton } from '@festicket/react-ui-components';

describe('<FacebookButton />', () => {
  test('with initial props', () => {
    const tree = mount(<FacebookButton />);
    expect(tree).toMatchSnapshot();
  });
});

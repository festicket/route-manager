// @flow

import React from 'react';
import { mount } from 'enzyme';
import { CloseButton } from '@festicket/react-ui-components';

describe('<CloseButton />', () => {
  test('with initial props', () => {
    const tree = mount(<CloseButton />);
    expect(tree).toMatchSnapshot();
  });
});

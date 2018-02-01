// @flow

import React from 'react';
import { mount } from 'enzyme';
import { ButtonRound } from '@festicket/react-ui-components';

describe('<ButtonRound />', () => {
  test('with initial props', () => {
    const tree = mount(<ButtonRound />);
    expect(tree).toMatchSnapshot();
  });
});

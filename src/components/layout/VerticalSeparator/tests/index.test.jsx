// @flow

import React from 'react';
import { mount } from 'enzyme';
import { VerticalSeparator } from '@festicket/react-ui-components';

describe('<VerticalSeparator />', () => {
  test('with initial props', () => {
    const tree = mount(<VerticalSeparator render={() => null} />);
    expect(tree).toMatchSnapshot();
  });
});

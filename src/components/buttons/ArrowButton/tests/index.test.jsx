// @flow

import React from 'react';
import { shallow } from 'enzyme';
import ArrowButton from '../';

describe('<ArrowButton />', () => {
  test('with initial props', () => {
    const tree = shallow(<ArrowButton href="/magazine" external />);
    expect(tree).toMatchSnapshot();
  });
});

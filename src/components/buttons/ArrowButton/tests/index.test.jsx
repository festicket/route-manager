import React from 'react';
import { shallow } from 'enzyme';
import ArrowButton from '../';
import Anchor from '../../../text/Anchor';

describe('<ArrowButton />', () => {
  test('with initial props', () => {
    const tree = shallow(
      <ArrowButton element={Anchor} href="/magazine" external />,
    );
    expect(tree).toMatchSnapshot();
  });
});

// @flow

import React from 'react';
import { shallow, mount } from 'enzyme';
import ArrowButton from '../';

function El({ children, to }: { children?: any, to: string }) {
  return <abbr title={to}>{children}</abbr>;
}

describe('<ArrowButton />', () => {
  test('with initial props', () => {
    const tree = shallow(<ArrowButton href="/magazine" external />);
    expect(tree).toMatchSnapshot();
  });

  test('with custom element', () => {
    const tree = mount(
      <ArrowButton element={El} to="https://www.google.com" />,
    );
    expect(tree).toMatchSnapshot();
  });
});

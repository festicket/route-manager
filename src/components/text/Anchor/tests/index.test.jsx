// @flow

import * as React from 'react';
import { spy } from 'sinon';
import { mount, shallow } from 'enzyme';
import Anchor from '../';

// Simulate a custom link component, for example React Router's Link
function El({ children, to }: { children?: React.Node, to: string }) {
  return <span title={to}>{children}</span>;
}

describe('<Anchor />', () => {
  test('should render correctly', () => {
    const wrapper = mount(<Anchor href="http://www.google.com">Google</Anchor>);
    expect(wrapper).toMatchSnapshot();
  });

  test('should render correctly with custom element', () => {
    const wrapper = mount(
      <Anchor to="http://www.google.com" element={El}>
        Google
      </Anchor>,
    );
    expect(wrapper).toMatchSnapshot();
  });

  test('should render correctly with email prop', () => {
    const wrapper = mount(<Anchor email="email@test.com">Email me</Anchor>);
    expect(wrapper).toMatchSnapshot();
  });

  test('should render correctly with tel prop', () => {
    const wrapper = mount(<Anchor tel="08000337132">Phone us</Anchor>);
    expect(wrapper).toMatchSnapshot();
  });

  it('should call function if onClick property is passed', () => {
    const handle = spy();
    const component = shallow(
      <Anchor href="http://www.google.com" onClick={handle}>
        Google
      </Anchor>,
    );
    expect(handle.callCount).toEqual(0);
    component.simulate('click');
    expect(handle.callCount).toEqual(1);
  });

  it('should call function if onClick property is passed with email', () => {
    const handle = spy();
    const component = shallow(
      <Anchor email="email@test.com" onClick={handle}>
        Email me
      </Anchor>,
    );
    expect(handle.callCount).toEqual(0);
    component.simulate('click');
    expect(handle.callCount).toEqual(1);
  });

  it('should call function if onClick property is passed with external', () => {
    const handle = spy();
    const component = shallow(
      <Anchor href="http://www.google.com" onClick={handle} external>
        Google
      </Anchor>,
    );
    expect(handle.callCount).toEqual(0);
    component.simulate('click');
    expect(handle.callCount).toEqual(1);
  });
});

// @flow

import * as React from 'react';
import { shallow } from 'enzyme';
import { renderWithTheme } from 'src/utils/testing';

import Anchor from '../';

// Simulate a custom link component, for example React Router's Link
function El({
  children,
  className,
  to,
}: {
  children?: React.Node,
  className: string,
  to: string,
}) {
  return (
    <span className={className} title={to}>
      {children}
    </span>
  );
}

describe('<Anchor />', () => {
  test('should render correctly', () => {
    const wrapper = renderWithTheme(
      <Anchor href="http://www.google.com">Google</Anchor>,
    );
    expect(wrapper).toMatchSnapshot();
  });

  test('should render correctly with hyperlink variant', () => {
    const wrapper = renderWithTheme(
      <Anchor href="http://www.google.com" variant="hyperlink">
        Google
      </Anchor>,
    );
    expect(wrapper).toMatchSnapshot();
  });

  test('should render correctly with custom element', () => {
    const wrapper = renderWithTheme(
      <Anchor to="http://www.google.com" element={El}>
        Google
      </Anchor>,
    );
    expect(wrapper).toMatchSnapshot();
  });

  test('should render correctly with email prop', () => {
    const wrapper = renderWithTheme(
      <Anchor email="email@test.com">Email me</Anchor>,
    );
    expect(wrapper).toMatchSnapshot();
  });

  test('should render correctly with tel prop', () => {
    const wrapper = renderWithTheme(
      <Anchor tel="08000337132">Phone us</Anchor>,
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should call function if onClick property is passed', () => {
    const handle = jest.fn();
    const component = shallow(
      <Anchor href="http://www.google.com" onClick={handle}>
        Google
      </Anchor>,
    );
    expect(handle.mock.calls.length).toEqual(0);
    component.simulate('click');
    expect(handle.mock.calls.length).toEqual(1);
  });

  it('should call function if onClick property is passed with email', () => {
    const handle = jest.fn();
    const component = shallow(
      <Anchor email="email@test.com" onClick={handle}>
        Email me
      </Anchor>,
    );
    expect(handle.mock.calls.length).toEqual(0);
    component.simulate('click');
    expect(handle.mock.calls.length).toEqual(1);
  });

  it('should call function if onClick property is passed with external', () => {
    const handle = jest.fn();
    const component = shallow(
      <Anchor href="http://www.google.com" onClick={handle} external>
        Google
      </Anchor>,
    );
    expect(handle.mock.calls.length).toEqual(0);
    component.simulate('click');
    expect(handle.mock.calls.length).toEqual(1);
  });
});

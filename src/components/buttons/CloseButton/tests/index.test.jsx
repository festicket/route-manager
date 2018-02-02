// @flow

import React from 'react';
import { mount } from 'enzyme';
import { spy } from 'sinon';
import { CloseButton } from '@festicket/react-ui-components';

describe('<CloseButton />', () => {
  test('should check component snapshot', () => {
    const handle = spy();
    const component = mount(<CloseButton alt="Close" handleClose={handle} />);

    expect(component).toMatchSnapshot();
  });

  test('should check component snapshot with size', () => {
    const handle = spy();
    const component = mount(
      <CloseButton alt="Close" size={50} handleClose={handle} />,
    );

    expect(component).toMatchSnapshot();
  });

  test('should call handleClose on click', () => {
    const handle = spy();
    const wrapper = mount(<CloseButton alt="Close" handleClose={handle} />);
    expect(handle.callCount).toEqual(0);
    wrapper.simulate('click');
    expect(handle.callCount).toEqual(1);
  });
});

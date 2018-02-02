// @flow

import React from 'react';
import { shallow } from 'enzyme';
import { PrimaryButton } from '@festicket/react-ui-components';

describe('<PrimaryButton />', () => {
  test('Snapshot Default', () => {
    const wrapper = shallow(<PrimaryButton />);
    expect(wrapper).toMatchSnapshot();
  });
  test('Snapshot Default Button Element', () => {
    const wrapper = shallow(<PrimaryButton element="button" />);
    expect(wrapper).toMatchSnapshot();
  });
  test('Snapshot Default Small', () => {
    const wrapper = shallow(<PrimaryButton size="small" />);
    expect(wrapper).toMatchSnapshot();
  });
  test('Snapshot Bordered', () => {
    const wrapper = shallow(<PrimaryButton variant="bordered" />);
    expect(wrapper).toMatchSnapshot();
  });
  test('Snapshot Bordered Small', () => {
    const wrapper = shallow(<PrimaryButton variant="bordered" size="small" />);
    expect(wrapper).toMatchSnapshot();
  });
});

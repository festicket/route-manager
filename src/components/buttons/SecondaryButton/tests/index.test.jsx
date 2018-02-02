// @flow

import React from 'react';
import { shallow } from 'enzyme';
import { SecondaryButton } from '@festicket/react-ui-components';

describe('<SecondaryButton />', () => {
  test('Snapshot Default', () => {
    const wrapper = shallow(<SecondaryButton />);
    expect(wrapper).toMatchSnapshot();
  });

  test('Snapshot Default Button Element', () => {
    const wrapper = shallow(<SecondaryButton element="button" />);
    expect(wrapper).toMatchSnapshot();
  });

  test('Snapshot Default Small', () => {
    const wrapper = shallow(<SecondaryButton size="small" />);
    expect(wrapper).toMatchSnapshot();
  });

  test('Snapshot Bordered', () => {
    const wrapper = shallow(<SecondaryButton variant="bordered" />);
    expect(wrapper).toMatchSnapshot();
  });

  test('Snapshot Bordered Small', () => {
    const wrapper = shallow(
      <SecondaryButton variant="bordered" size="small" />,
    );
    expect(wrapper).toMatchSnapshot();
  });
});

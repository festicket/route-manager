import React from 'react';
import { mount } from 'enzyme';
import { PrimaryButton } from '@festicket/react-ui-components';

describe('<PrimaryButton />', () => {
  test('with initial props', () => {
    const tree = mount(<PrimaryButton />);
    expect(tree).toMatchSnapshot();
  });
});

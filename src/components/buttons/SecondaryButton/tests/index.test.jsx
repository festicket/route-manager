import React from 'react';
import { mount } from 'enzyme';
import { SecondaryButton } from '@festicket/react-ui-components';

describe('<SecondaryButton />', () => {
  test('with initial props', () => {
    const tree = mount(<SecondaryButton />);
    expect(tree).toMatchSnapshot();
  });
});

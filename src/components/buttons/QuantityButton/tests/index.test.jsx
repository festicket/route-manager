import React from 'react';
import { mount } from 'enzyme';
import { QuantityButton } from '@festicket/react-ui-components';

describe('<QuantityButton />', () => {
  test('with initial props', () => {
    const tree = mount(<QuantityButton />);
    expect(tree).toMatchSnapshot();
  });
});

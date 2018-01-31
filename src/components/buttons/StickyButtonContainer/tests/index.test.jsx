import React from 'react';
import { mount } from 'enzyme';
import { StickyButtonContainer } from '@festicket/react-ui-components';

describe('<StickyButtonContainer />', () => {
  test('with initial props', () => {
    const tree = mount(<StickyButtonContainer />);
    expect(tree).toMatchSnapshot();
  });
});

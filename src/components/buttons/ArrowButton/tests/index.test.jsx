import React from 'react';
import { mount } from 'enzyme';
import { ArrowButton } from '@festicket/react-ui-components';

describe('<ArrowButton />', () => {
  test('with initial props', () => {
    const tree = mount(<ArrowButton />);
    expect(tree).toMatchSnapshot();
  });
});

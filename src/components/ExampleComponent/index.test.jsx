import React from 'react';
import { mount } from 'enzyme';
import { ExampleComponent } from '@festicket/sample-react-components-library';

it('renders correctly', () => {
  const tree = mount(<ExampleComponent name="Ben" />);
  expect(tree).toMatchSnapshot();
});

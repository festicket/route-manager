import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { ExampleComponent } from '@festicket/sample-react-components-library';

it('renders correctly', () => {
  const tree = shallow(<ExampleComponent name="Ben" />);
  expect(toJson(tree)).toMatchSnapshot();
});

import React from 'react';
import renderer from 'react-test-renderer';
import { ExampleComponent } from '@festicket/sample-react-components-library';

it('renders correctly', () => {
  const tree = renderer.create(<ExampleComponent name="Ben" />).toJSON();
  expect(tree).toMatchSnapshot();
});

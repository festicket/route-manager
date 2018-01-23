import React from 'react';
import Component from './';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer.create(<Component name="Ben" />).toJSON();
  expect(tree).toMatchSnapshot();
});

import React from 'react';
import { mount } from 'enzyme';
import { ExampleComponent } from '@festicket/react-ui-components';

describe('<ExampleComponent />', () => {
  test('with initial props', () => {
    const tree = mount(<ExampleComponent />);
    expect(tree).toMatchSnapshot();
  });
});

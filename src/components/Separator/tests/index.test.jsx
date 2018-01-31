import React from 'react';
import { mount } from 'enzyme';
import { Separator } from '@festicket/react-ui-components';

describe('<Separator />', () => {
  test('with initial props', () => {
    const tree = mount(<Separator />);
    expect(tree).toMatchSnapshot();
  });
});

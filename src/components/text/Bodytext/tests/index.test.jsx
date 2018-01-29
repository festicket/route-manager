import React from 'react';
import { mount } from 'enzyme';
import { Bodytext } from '@festicket/react-ui-components';

describe('<Bodytext />', () => {
  test('that it renders correctly', () => {
    const tree = mount(<Bodytext size="regular">Regular size</Bodytext>);
    expect(tree).toMatchSnapshot();
  });

  test('that it renders correctly with element prop', () => {
    const tree = mount(<Bodytext element="span">Small size</Bodytext>);
    expect(tree).toMatchSnapshot();
  });

  test('that it renders correctly with spacing prop', () => {
    const tree = mount(<Bodytext spacing="md">Spacing Test</Bodytext>);
    expect(tree).toMatchSnapshot();
  });
});

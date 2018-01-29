import React from 'react';
import { mount } from 'enzyme';
import { Bodytext } from '@festicket/react-ui-components';

describe('<Bodytext />', () => {
  test('with initial props', () => {
    const tree = mount(<Bodytext size="regular">Regular size</Bodytext>);
    expect(tree).toMatchSnapshot();
  });

  test('with element prop', () => {
    const tree = mount(<Bodytext element="span">Small size</Bodytext>);
    expect(tree).toMatchSnapshot();
  });
});

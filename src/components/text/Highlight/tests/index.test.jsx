// @flow
import React from 'react';
import { mount } from 'enzyme';
import { Highlight } from '@festicket/react-ui-components';

describe('<Highlight />', () => {
  test('with initial props', () => {
    const tree = mount(<Highlight size="regular">Regular size test</Highlight>);
    expect(tree).toMatchSnapshot();
  });

  test('with element prop', () => {
    const tree = mount(<Highlight element="span">Element prop test</Highlight>);
    expect(tree).toMatchSnapshot();
  });
});
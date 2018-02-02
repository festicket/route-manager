// @flow

import React from 'react';
import { mount } from 'enzyme';
import { SecondaryHeading } from '@festicket/react-ui-components';

describe('<SecondaryHeading />', () => {
  test('with initial props', () => {
    const tree = mount(<SecondaryHeading>test</SecondaryHeading>);
    expect(tree).toMatchSnapshot();
  });

  test('with color prop', () => {
    const tree = mount(<SecondaryHeading color="white">test</SecondaryHeading>);
    expect(tree).toMatchSnapshot();
  });

  test('with weight prop', () => {
    const tree = mount(
      <SecondaryHeading weight="light">test</SecondaryHeading>,
    );
    expect(tree).toMatchSnapshot();
  });
});

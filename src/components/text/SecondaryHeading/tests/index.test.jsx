// @flow

import React from 'react';
import { mount } from 'enzyme';
import { SecondaryHeading } from '@festicket/react-ui-components';

describe('<SecondaryHeading />', () => {
  test('with initial props', () => {
    const tree = mount(
      <SecondaryHeading>Secondary heading test</SecondaryHeading>,
    );
    expect(tree).toMatchSnapshot();
  });

  test('with color prop', () => {
    const tree = mount(
      <SecondaryHeading color="white">color prop test</SecondaryHeading>,
    );
    expect(tree).toMatchSnapshot();
  });

  test('with weight prop', () => {
    const tree = mount(
      <SecondaryHeading weight="light">weight prop test</SecondaryHeading>,
    );
    expect(tree).toMatchSnapshot();
  });
});

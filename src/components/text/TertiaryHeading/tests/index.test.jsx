// @flow

import React from 'react';
import { mount } from 'enzyme';
import { TertiaryHeading } from '@festicket/react-ui-components';

describe('<TertiaryHeading />', () => {
  test('with initial props', () => {
    const tree = mount(
      <TertiaryHeading>Tertiary heading test</TertiaryHeading>,
    );
    expect(tree).toMatchSnapshot();
  });

  test('with color prop', () => {
    const tree = mount(
      <TertiaryHeading color="white">color prop test</TertiaryHeading>,
    );
    expect(tree).toMatchSnapshot();
  });

  test('with weight prop', () => {
    const tree = mount(
      <TertiaryHeading weight="light">weight prop test</TertiaryHeading>,
    );
    expect(tree).toMatchSnapshot();
  });
});

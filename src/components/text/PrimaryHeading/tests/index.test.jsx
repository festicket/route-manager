// @flow

import React from 'react';
import { mount } from 'enzyme';
import { PrimaryHeading } from '@festicket/react-ui-components';

describe('<PrimaryHeading />', () => {
  test('with initial props', () => {
    const tree = mount(
      <PrimaryHeading element="h1">Primary Heading</PrimaryHeading>,
    );
    expect(tree).toMatchSnapshot();
  });
});

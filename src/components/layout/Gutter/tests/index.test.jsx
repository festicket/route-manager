// @flow

import React from 'react';
import { mount } from 'enzyme';
import { Gutter } from '@festicket/react-ui-components';

describe('<Gutter />', () => {
  test('with initial props', () => {
    const tree = mount(
      <Gutter>
        <span>This is some content.</span>
      </Gutter>,
    );
    expect(tree).toMatchSnapshot();
  });
});

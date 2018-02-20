// @flow

import React from 'react';
import { mount } from 'enzyme';
import { WithVerticalSeparator } from '@festicket/react-ui-components';

describe('<WithVerticalSeparator />', () => {
  test('with initial props', () => {
    const tree = mount(
      <WithVerticalSeparator>
        <span>this is some text</span>
      </WithVerticalSeparator>,
    );
    expect(tree).toMatchSnapshot();
  });
});

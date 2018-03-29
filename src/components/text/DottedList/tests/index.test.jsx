// @flow

import React from 'react';
import { mount } from 'enzyme';
import { DottedList } from '@festicket/react-ui-components';

describe('<DottedList />', () => {
  test('with initial props', () => {
    const tree = mount(
      <DottedList.List>
        <DottedList.ListItem>First item</DottedList.ListItem>
        <DottedList.ListItem>Second item</DottedList.ListItem>
        <DottedList.ListItem>Third item</DottedList.ListItem>
        <DottedList.ListItem>Forth item</DottedList.ListItem>
      </DottedList.List>,
    );
    expect(tree).toMatchSnapshot();
  });
});

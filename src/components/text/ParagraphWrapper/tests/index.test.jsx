// @flow

import React from 'react';
import { mount } from 'enzyme';
import { ParagraphWrapper } from '@festicket/react-ui-components';

import html from './fixtures';

describe('<ParagraphWrapper />', () => {
  test('with initial props', () => {
    const tree = mount(<ParagraphWrapper html={html} />);
    expect(tree).toMatchSnapshot();
  });
});

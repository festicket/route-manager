// @flow

import React from 'react';
import { shallow } from 'enzyme';

import { HtmlWrapper } from '@festicket/react-ui-components';

import { oneParagraph } from './fixtures';

describe('<HtmlWrapper />', () => {
  test('with initial props', () => {
    const tree = shallow(<HtmlWrapper htmlString={oneParagraph} />);
    expect(tree).toMatchSnapshot();
  });
});

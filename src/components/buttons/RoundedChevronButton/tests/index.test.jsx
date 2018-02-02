// @flow

import React from 'react';
import { shallow } from 'enzyme';
import { RoundedChevronButton } from '@festicket/react-ui-components';

describe('<RoundedChevronButton />', () => {
  test('with initial props', () => {
    const tree = shallow(<RoundedChevronButton direction="right" />)
      .first()
      .shallow();
    expect(tree).toMatchSnapshot();
  });
});

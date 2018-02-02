// @flow

import React from 'react';
import { shallow } from 'enzyme';
import { RoundedChevronButton } from '@festicket/react-ui-components';

describe('<RoundedChevronButton />', () => {
  test('with initial props', () => {
    const tree = shallow(<RoundedChevronButton />)
      .first()
      .shallow();
    expect(tree).toMatchSnapshot();
  });
});

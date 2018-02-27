// @flow

import React from 'react';
import { mount } from 'enzyme';
import { Box } from '@festicket/react-ui-components';

describe('<Box />', () => {
  test('with initial props', () => {
    const tree = mount(
      <Box>
        <span>This is some content.</span>
      </Box>,
    );
    expect(tree).toMatchSnapshot();
  });
});

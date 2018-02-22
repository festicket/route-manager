// @flow

import React from 'react';
import { mount } from 'enzyme';
import { FrequentlyAskedQuestion } from '@festicket/react-ui-components';

describe('<FrequentlyAskedQuestion />', () => {
  test('with initial props', () => {
    const tree = mount(
      <FrequentlyAskedQuestion title="Lorem ipsum dolor sit amet">
        Lorem ipsum dolor sit amet, ius tempor labore te, eu postea scriptorem
        sit. Diceret saperet per ad, stet utroque quaerendum ius eu, eam zril
        facilisi eu. Offendit corrumpit at eum, qui verterem scriptorem
        comprehensam in. Ad eros erant dolores sit, ei cum liber fabellas.
      </FrequentlyAskedQuestion>,
    );
    expect(tree).toMatchSnapshot();
  });
});

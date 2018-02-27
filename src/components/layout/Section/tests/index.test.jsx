// @flow

import React from 'react';
import { mount } from 'enzyme';
import { Section } from '@festicket/react-ui-components';

describe('<Section />', () => {
  test('with initial props', () => {
    const tree = mount(
      <Section>
        <span>Content</span>
      </Section>,
    );
    expect(tree).toMatchSnapshot();
  });

  test('with section variant', () => {
    const tree = mount(
      <Section variant="section">
        <span>Content</span>
      </Section>,
    );
    expect(tree).toMatchSnapshot();
  });

  test('with semi-section variant', () => {
    const tree = mount(
      <Section variant="semi-section">
        <span>Content</span>
      </Section>,
    );
    expect(tree).toMatchSnapshot();
  });
});

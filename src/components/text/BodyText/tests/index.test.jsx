// @flow
import React from 'react';
import { mount } from 'enzyme';
import { BodyText } from '@festicket/react-ui-components';

describe('<BodyText />', () => {
  test('that it renders correctly', () => {
    const tree = mount(<BodyText size="regular">Regular size</BodyText>);
    expect(tree).toMatchSnapshot();
  });

  test('that it renders correctly with element prop', () => {
    const tree = mount(<BodyText element="span">Small size</BodyText>);
    expect(tree).toMatchSnapshot();
  });

  test('that it renders correctly with spacing prop', () => {
    const tree = mount(<BodyText spacing="md">Spacing Test</BodyText>);
    expect(tree).toMatchSnapshot();
  });
});

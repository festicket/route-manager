// @flow

import React from 'react';
import { mount } from 'enzyme';
import { Separator } from '@festicket/react-ui-components';

describe('<Separator />', () => {
  test('with initial props', () => {
    const tree = mount(<Separator />);
    expect(tree).toMatchSnapshot();
  });

  test('with light variant', () => {
    const tree = mount(<Separator variant="light" />);
    expect(tree).toMatchSnapshot();
  });

  test('with medium variant', () => {
    const tree = mount(<Separator variant="medium" />);
    expect(tree).toMatchSnapshot();
  });

  test('with dark variant', () => {
    const tree = mount(<Separator variant="dark" />);
    expect(tree).toMatchSnapshot();
  });

  test('with margin true', () => {
    const tree = mount(<Separator variant="dark" margin />);
    expect(tree).toMatchSnapshot();
  });

  test('with margin false', () => {
    const tree = mount(<Separator variant="dark" margin={false} />);
    expect(tree).toMatchSnapshot();
  });

  test('with marginLarge true', () => {
    const tree = mount(<Separator variant="dark" marginLarge />);
    expect(tree).toMatchSnapshot();
  });

  test('with marginLarge false', () => {
    const tree = mount(<Separator variant="dark" marginLarge={false} />);
    expect(tree).toMatchSnapshot();
  });
});

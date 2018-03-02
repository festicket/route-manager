// @flow

import React from 'react';
import { SecondaryButton } from '@festicket/react-ui-components';
import { renderWithTheme } from 'src/utils/testing';

describe('<SecondaryButton />', () => {
  test('Snapshot Default', () => {
    const wrapper = renderWithTheme(<SecondaryButton />);
    expect(wrapper).toMatchSnapshot();
  });

  test('Snapshot Default Button Element', () => {
    const wrapper = renderWithTheme(<SecondaryButton element="button" />);
    expect(wrapper).toMatchSnapshot();
  });

  test('Snapshot Default Small', () => {
    const wrapper = renderWithTheme(<SecondaryButton size="small" />);
    expect(wrapper).toMatchSnapshot();
  });

  test('Snapshot Bordered', () => {
    const wrapper = renderWithTheme(<SecondaryButton variant="bordered" />);
    expect(wrapper).toMatchSnapshot();
  });

  test('Snapshot Bordered Small', () => {
    const wrapper = renderWithTheme(
      <SecondaryButton variant="bordered" size="small" />,
    );
    expect(wrapper).toMatchSnapshot();
  });
});

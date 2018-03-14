// @flow

import React from 'react';
import { PrimaryButton } from '@festicket/react-ui-components';
import { renderWithTheme } from 'src/tests/utils';

describe('<PrimaryButton />', () => {
  test('Snapshot Default', () => {
    const wrapper = renderWithTheme(<PrimaryButton />);
    expect(wrapper).toMatchSnapshot();
  });
  test('Snapshot isDisabled', () => {
    const wrapper = renderWithTheme(<PrimaryButton isDisabled />);
    expect(wrapper).toMatchSnapshot();
  });
  test('Snapshot Default Button Element', () => {
    const wrapper = renderWithTheme(<PrimaryButton element="button" />);
    expect(wrapper).toMatchSnapshot();
  });
  test('Snapshot Default Small', () => {
    const wrapper = renderWithTheme(<PrimaryButton size="small" />);
    expect(wrapper).toMatchSnapshot();
  });
  test('Snapshot Bordered', () => {
    const wrapper = renderWithTheme(<PrimaryButton variant="bordered" />);
    expect(wrapper).toMatchSnapshot();
  });
  test('Snapshot Bordered Small', () => {
    const wrapper = renderWithTheme(
      <PrimaryButton variant="bordered" size="small" />,
    );
    expect(wrapper).toMatchSnapshot();
  });
});

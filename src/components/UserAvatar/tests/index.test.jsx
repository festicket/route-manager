// @flow

import React from 'react';
import { UserAvatar } from '@festicket/react-ui-components';
import { renderWithTheme } from 'src/utils/testing';

const avatarLarge = 'http://via.placeholder.com/350x150';
const name = 'Ben';

describe('<UserAvatar />', () => {
  test('with avatarLarge', () => {
    const tree = renderWithTheme(<UserAvatar user={{ avatarLarge }} />);
    expect(tree).toMatchSnapshot();
  });

  test('with avatarLarge and medium variant', () => {
    const tree = renderWithTheme(
      <UserAvatar user={{ avatarLarge }} variant="medium" />,
    );
    expect(tree).toMatchSnapshot();
  });

  test('with avatarLarge and large variant', () => {
    const tree = renderWithTheme(
      <UserAvatar user={{ avatarLarge }} variant="large" />,
    );
    expect(tree).toMatchSnapshot();
  });

  test('with name', () => {
    const tree = renderWithTheme(<UserAvatar user={{ name }} />);
    expect(tree).toMatchSnapshot();
  });

  test('with name and medium variant', () => {
    const tree = renderWithTheme(
      <UserAvatar user={{ name }} variant="medium" />,
    );
    expect(tree).toMatchSnapshot();
  });

  test('with name and large variant', () => {
    const tree = renderWithTheme(
      <UserAvatar user={{ name }} variant="large" />,
    );
    expect(tree).toMatchSnapshot();
  });
});

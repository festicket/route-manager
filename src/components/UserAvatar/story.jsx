// @flow

import React from 'react';
import { storiesOf } from '@storybook/react';
import UserAvatar from './';

const avatarLarge = 'http://via.placeholder.com/350x150';
const initial = 'B';

storiesOf('Components / UserAvatar', module)
  .add('With image', () => <UserAvatar avatarLarge={avatarLarge} />)
  .add('With initial', () => <UserAvatar initial={initial} />)
  .add('With image and small variant', () => (
    <UserAvatar avatarLarge={avatarLarge} variant="small" />
  ))
  .add('With image and large variant', () => (
    <UserAvatar avatarLarge={avatarLarge} variant="large" />
  ))
  .add('With initial and large variant', () => (
    <UserAvatar initial={initial} variant="large" />
  ));

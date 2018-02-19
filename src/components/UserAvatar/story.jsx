// @flow

import React from 'react';
import { storiesOf } from '@storybook/react';
import UserAvatar from './';

const avatarLarge = 'http://via.placeholder.com/350x150';
const name = 'Test';

storiesOf('Components / UserAvatar', module)
  .add('With image', () => <UserAvatar user={{ avatarLarge }} />)
  .add('With initial', () => <UserAvatar user={{ name }} />)
  .add('With image and small variant', () => (
    <UserAvatar user={{ avatarLarge }} variant="small" />
  ))
  .add('With image and large variant', () => (
    <UserAvatar user={{ avatarLarge }} variant="large" />
  ))
  .add('With initial and large variant', () => (
    <UserAvatar user={{ name }} variant="large" />
  ));

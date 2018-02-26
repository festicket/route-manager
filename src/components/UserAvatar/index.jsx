// @flow

import React from 'react';
import { Wrapper, StyledImage } from './styles';

type Props = {
  className?: string,
  variant?: 'small' | 'medium' | 'large',
  user: {
    name?: string,
    firstName?: string,
    avatarLarge?: string,
  },
};

function getInitial(name?: string) {
  if (!name) {
    return null;
  }

  return name.charAt(0).toUpperCase();
}

export default function UserAvatar({
  variant = 'small',
  user,
  ...props
}: Props) {
  const initial = getInitial(user.firstName || user.name);

  return (
    <Wrapper
      variant={variant}
      avatarLarge={user.avatarLarge}
      initial={initial}
      {...props}
    >
      {user.avatarLarge ? (
        <StyledImage src={user.avatarLarge} alt="" />
      ) : (
        initial
      )}
    </Wrapper>
  );
}

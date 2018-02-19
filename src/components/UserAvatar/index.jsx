// @flow

import React from 'react';
import { Wrapper, StyledImage } from './styles';

type Props = {
  className?: string,
  initial?: string,
  avatarLarge?: string,
  variant?: 'small' | 'medium' | 'large',
};

export default function UserAvatar({
  variant = 'small',
  avatarLarge,
  initial,
  ...props
}: Props) {
  return (
    <Wrapper
      variant={variant}
      avatarLarge={avatarLarge}
      initial={initial}
      {...props}
    >
      {avatarLarge ? <StyledImage src={avatarLarge} alt="" /> : initial}
    </Wrapper>
  );
}

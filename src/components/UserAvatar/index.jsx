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
  className,
  avatarLarge,
  initial,
  variant = 'small',
}: Props) {
  return (
    <Wrapper
      className={className}
      variant={variant}
      avatarLarge={avatarLarge}
      initial={initial}
    >
      {avatarLarge ? <StyledImage src={avatarLarge} alt="" /> : initial}
    </Wrapper>
  );
}

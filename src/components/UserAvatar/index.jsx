// @flow

// Lib
// -------------
import React from 'react';

// Components
// -------------

// Styles
// -------------
import { Wrapper } from './styles';

// Flow Types
// -------------
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
  const style = avatarLarge ? { backgroundImage: `url(${avatarLarge})` } : {};

  return (
    <Wrapper
      className={className}
      style={style}
      variant={variant}
      avatarLarge={avatarLarge}
      initial={initial}
    >
      {initial}
    </Wrapper>
  );
}

// @flow

// Lib
// -------------
import React, { type Node } from 'react';

// Components
// -------------
import BaseButton from '../BaseButton';
import FacebookIcon from '../../icons/social/FacebookAlt';

// Styles
// -------------
import { IconWrapper } from './styles';

// Flow Types
// -------------
type Props = {
  children?: string | Node,
  withIcon?: boolean,
  handleClick: () => mixed,
  buttonSize?: 'responsive' | 'full_width',
};

export default function FacebookButton({
  children,
  withIcon,
  handleClick,
  buttonSize = 'responsive',
}: Props) {
  return (
    <BaseButton variant="facebook" handleClick={handleClick} size={buttonSize}>
      <span>
        {withIcon && (
          <IconWrapper>
            <FacebookIcon />
          </IconWrapper>
        )}
        {children}
      </span>
    </BaseButton>
  );
}

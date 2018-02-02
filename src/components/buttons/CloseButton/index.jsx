// @flow

// Lib
// -------------
import React from 'react';
import styled from 'styled-components';
import { prop } from 'styled-tools';

// Components
// -------------
import CloseIcon from '../../icons/ui/Close';

// Styles
// -------------
// import { Wrapper } from './styles';

// Flow Types
// -------------
type Props = {
  alt?: string,
  size?: number,
  handleClose: () => mixed,
};

function CloseButtonComponent({ alt, className, handleClose }) {
  return (
    <button aria-label={alt} className={className} onClick={handleClose}>
      <CloseIcon />
    </button>
  );
}

const StyledCloseButtonComponent = styled(CloseButtonComponent)`
  font-size: ${prop('size')}px;
  color: ${prop('theme.colors.brand.primary')};
  background-color: transparent;
  border: 0;
  cursor: pointer;
  padding: 0;
  outline: 0;
  overflow: hidden;
`;

export default function CloseButton({ size = 18, ...props }: Props) {
  return <StyledCloseButtonComponent size={size} {...props} />;
}

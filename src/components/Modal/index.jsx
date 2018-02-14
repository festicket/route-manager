// @flow
import * as React from 'react';
import CloseIcon from '../svgs/generated/functional/Close';

import { StyledModal, CloseButton } from './styles';

type Props = {
  isOpen?: boolean,
  handleClose?: () => mixed,
  children: React.Node,
  className?: string,
};

export default function Modal({
  isOpen = false,
  handleClose,
  children,
  className,
}: Props) {
  return (
    <StyledModal
      className={className}
      isOpen={isOpen}
      onRequestClose={handleClose}
      closeTimeoutMS={300}
      contentLabel="Modal"
    >
      <CloseButton onClick={handleClose}>
        <CloseIcon color="grey" height={15} width={15} />
      </CloseButton>
      {children}
    </StyledModal>
  );
}

// @flow

import * as React from 'react';
import CloseIcon from 'src/components/svgs/generated/functional/Close';

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
    <div>
      {isOpen ? (
        <CloseButton data-cy="modal-close" onClick={handleClose}>
          <CloseIcon color="grey" height={15} width={15} />
        </CloseButton>
      ) : null}
      <StyledModal
        className={className}
        isOpen={isOpen}
        onRequestClose={handleClose}
        closeTimeoutMS={300}
        contentLabel="Modal"
      >
        {children}
      </StyledModal>
    </div>
  );
}

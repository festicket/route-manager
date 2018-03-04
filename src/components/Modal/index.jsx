// @flow
import * as React from 'react';

import CloseButton from 'src/components/buttons/roundedButtons/CloseButton';

import { StyledModal, CloseButtonWrapper } from './styles';

type Props = {
  isOpen?: boolean,
  handleClose?: () => void,
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
        <CloseButtonWrapper>
          <CloseButton
            element="button"
            id="modal-close"
            onClick={handleClose}
          />
        </CloseButtonWrapper>
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

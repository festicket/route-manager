// @flow
import React from 'react';
import ReactModal from 'react-modal';
import styled from 'styled-components';

// In order to combine styled-components with React Modal
// We have to use an adapter function and then extend it with styled components.
// passing in the React Modal class names via the attributes function.
function ReactModalAdapter({ className, modalClassName, ...props }) {
  return (
    <ReactModal
      className={modalClassName}
      portalClassName={className}
      ariaHideApp={false}
      {...props}
    />
  );
}

export const StyledModal = styled(ReactModalAdapter).attrs({
  overlayClassName: {
    base: 'Overlay',
    afterOpen: 'Overlay_after-open',
    beforeClose: 'Overlay_before-close',
  },
  modalClassName: {
    base: 'Modal',
    afterOpen: 'Modal_after-open',
    beforeClose: 'Modal_before-close',
  },
})`
  .Modal {
    opacity: 0;
    transform: translateY(20px);
    will-change: opacity, transform;
    transition: transform 0.3s, opacity 0.3s;
    margin: 0 auto;
    padding: 100px 0;
    width: 800px;

    &:focus {
      outline: none;
    }

    &_after-open {
      opacity: 1;
      transform: translateY(0);
    }

    &_before-close {
      opacity: 0;
      transform: translateY(40px);
      transition: transform 0.3s, opacity 0.3s;
    }
  }
  .Overlay {
    overflow-y: scroll;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    width: 100vw;
    height: 100%;
    background-color: #242529;
    opacity: 0;
    will-change: background-color;
    transition: background-color 0.3s;
    z-index: 15;

    &_after-open {
      opacity: 0.9;
      transform: translateY(0);
    }

    &_before-close {
      opacity: 0;
      transform: translateY(0);
      transition: transform 0.3s, opacity 0.3s;
    }
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  width: 38px;
  height: 38px;
  border-radius: 25px;
  background-color: #ffffff;
  box-shadow: 0 2px 40px 0 rgba(36, 37, 41, 0.1);
`;

// @flow
import React from 'react';
import ReactModal from 'react-modal';
import styled from 'styled-components';
import { prop } from 'styled-tools';
import breakpoint from '../../utils/breakpoint/';

// In order to combine styled-components with react-modal
// We have to use an adapter function and then extend it with styled components,
// passing in the react-modal class names via the attributes function.
// The props that are passed in to the adapter have to be in this format,
// otherwise the overlay and modal animation won't work.
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
    will-change: opacity, transform;
    transition: transform 0.8s 0.4s, opacity 0.2s 0.4s;
    margin: 0 auto;
    width: 100%;

    ${breakpoint('from-md')`
      max-width: 800px;
      padding: 100px 0;
      transform: translateY(20px);
    `};

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
      transition: transform 0.8s, opacity 0.2s;
    }
  }
  .Overlay {
    overflow-y: scroll;
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: ${prop('theme.colors.greyscale.black')};
    opacity: 0;
    will-change: background-color;
    transition: background-color 0.1s;

    &_after-open {
      opacity: 0.99;
      transform: translateY(0);
    }

    &_before-close {
      opacity: 0;
      transform: translateY(0);
      transition: transform 0.8s 0.4s, opacity 0.2s 0.4s;
    }
  }
`;

export const CloseButton = styled.button`
  position: fixed;
  top: 20px;
  right: 20px;
  width: 38px;
  height: 38px;
  border-radius: 25px;
  background-color: ${prop('theme.colors.white')};
  box-shadow: 0 2px 30px 0 ${prop('theme.colors.shadowColor')};
  z-index: 1;
  border: 0;
`;

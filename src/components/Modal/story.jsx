// @flow
import React from 'react';
import { withState } from 'recompose';
import { storiesOf } from '@storybook/react';
import Modal from './';
import { Background } from '../../utils/storybook-helpers/';

// Enhance the modal with some component state and a function to toggle it.
const ModalWithState = withState('isOpen', 'toggleModal', false)(ModalWrapper);

// StorybookWrapper for the state enhanced modal.
function ModalWrapper({ isOpen, toggleModal, children }) {
  return (
    <Background.FullWidth>
      <button onClick={() => toggleModal(state => !state)}>Toggle</button>
      <Modal isOpen={isOpen} handleClose={() => toggleModal(state => !state)}>
        {children}
      </Modal>
    </Background.FullWidth>
  );
}

storiesOf('Components / Modal', module).add('default', () => (
  <ModalWithState>
    <Background.White>
      <h1>Yo!</h1>
    </Background.White>
  </ModalWithState>
));

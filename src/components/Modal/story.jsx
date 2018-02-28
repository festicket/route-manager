// @flow
import React, { Fragment } from 'react';
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
      <button
        className="modal-button"
        onClick={() => toggleModal(state => !state)}
      >
        Toggle Modal
      </button>
      <Modal isOpen={isOpen} handleClose={() => toggleModal(state => !state)}>
        {children}
      </Modal>
    </Background.FullWidth>
  );
}

const dummyText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vel
orci viverra, cursus purus ac, condimentum lacus. Cras et mauris
nulla. Curabitur lectus dolor, vehicula ut ultricies sodales, varius
rhoncus risus. Morbi rutrum sed tellus nec efficitur. Maecenas dictum
semper quam non ornare. Quisque interdum sapien ac ex cursus luctus.
Donec id nisi pellentesque, varius turpis cursus, dictum ipsum.
Curabitur ipsum justo, scelerisque a magna eget, laoreet pharetra
lectus. Aenean hendrerit massa non urna viverra ultricies. Nulla
facilisi. Ut lacinia tortor a justo lobortis aliquam. Nullam at
vestibulum elit. In molestie justo a fringilla rutrum. Vivamus rhoncus
lacus vitae nisl porttitor, pellentesque euismod dolor mattis. Cras
quis diam nisl. Nulla bibendum feugiat commodo.`;

// $FlowFixMe
const modalContent = Array.from({ length: 8 }).fill(dummyText);

storiesOf('Components / Modal', module)
  .add('default', () => (
    <ModalWithState>
      <Background.White>
        <h1 id="modal-content">Modal Test!</h1>
        <article>
          <p>{dummyText}</p>
          <br />
        </article>
      </Background.White>
    </ModalWithState>
  ))
  .add('with overflowing content', () => (
    <ModalWithState>
      <Background.White>
        <h1 id="modal-content">Modal Test!</h1>
        <article>
          {modalContent.map(item => (
            <Fragment key={Math.random()}>
              <p>{item}</p>
              <br />
            </Fragment>
          ))}
        </article>
      </Background.White>
    </ModalWithState>
  ));

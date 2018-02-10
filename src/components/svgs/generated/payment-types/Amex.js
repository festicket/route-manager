// @flow
import React from 'react';
import { paymentTypes as baseSVG } from '../../base-svgs';
import { PaymentTypePropTypes as propTypes } from '../../prop-types';

const Amex = (props: {}) => (
  <svg viewBox="0 0 39 26" {...props}>
    <path
      d="M1.8 0h35.4c1 0 1.8.8 1.8 1.9v22.3c0 1-.8 1.9-1.8 1.9H1.8c-1 0-1.8-.8-1.8-1.9V1.9C0 .8.8 0 1.8 0z"
      fill="#0081c9"
    />
    <path
      d="M31 12.9l2.8-3.2h-4.1l-.7.9-.7-.9H17.5l-.7 1.8-.8-1.8h-3.5v2.5l-1.2-2.5H8.7l-3.2 6.7H9l.5-1.1h1l.5 1.1h17l.9-1.1.9 1.1H34l-3-3.5zm-18.1 2.5h-1.4l-.5-1.1H8.8l-.5 1.1H7l2.3-4.7h1.4l2.2 4.7zm7.1 0h-1.3V12l-1.5 3.4h-1L14.7 12v3.3h-1.3v-4.7h1.9l1.4 3.3 1.3-3.3h2v4.8zm5.8 0h-4.6v-4.7h4.6v.9h-3.2v1h2.9v.8h-2.9v1.2h3.3v.8zm3.1-1.7l-1.4 1.6H26l2.1-2.5-2-2.3h1.6l1.2 1.5 1.2-1.5h1.5l-2 2.3 2.1 2.5h-1.6l-1.2-1.6z"
      fill="#fff"
    />
    <path fill="#fff" d="M9.9 11.8l-.8 1.7h1.6l-.7-1.7z" />
  </svg>
);

Amex.propTypes = propTypes;

export default baseSVG.withComponent(Amex);

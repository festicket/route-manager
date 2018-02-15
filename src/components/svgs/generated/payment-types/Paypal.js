// @flow
import React from 'react';
import { paymentTypes as baseSVG } from '../../styled-base-svgs';
import type { PaymentSVGProps } from '../../flow-types';

const Paypal = (props: PaymentSVGProps) => (
  <svg viewBox="0 0 39 26" {...props}>
    <path
      d="M1.8 0h35.4c1 0 1.8.8 1.8 1.9v22.3c0 1-.8 1.9-1.8 1.9H1.8c-1 0-1.8-.8-1.8-1.9V1.9C0 .8.8 0 1.8 0z"
      fill="#f5f6f8"
    />
    <path
      d="M9.1 12.2c-.1.8-.7.8-1.3.8h-.3l.2-1.5c0-.1.1-.2.2-.2h.2c.4 0 .8 0 1 .2.1.2.1.4 0 .7zm-.2-2.1H6.7c-.2 0-.3.1-.3.3l-.9 5.8c0 .1.1.2.2.2h1c.2 0 .3-.1.3-.3l.2-1.6c0-.2.2-.3.3-.3h.7c1.4 0 2.3-.7 2.5-2.2.1-.6 0-1.1-.3-1.5-.2-.2-.8-.4-1.5-.4zM13.9 14.3c-.1.6-.6 1-1.2 1-.3 0-.5-.1-.7-.3-.2-.2-.2-.5-.2-.8.1-.6.6-1.1 1.2-1.1.3 0 .5.1.7.3.2.4.3.6.2.9zm1.5-2.1h-1c-.1 0-.2.1-.2.2v.3l-.1-.1c-.2-.3-.7-.5-1.2-.5-1.1 0-2.1.9-2.3 2.2-.1.6 0 1.2.4 1.7.3.4.8.5 1.3.5.9 0 1.4-.6 1.4-.6v.3c0 .1.1.2.2.2h.9c.2 0 .3-.1.3-.3l.6-3.7c-.1-.1-.2-.2-.3-.2zM20.9 12.2h-1c-.1 0-.2.1-.2.1l-1.4 2.2-.6-2.1c0-.1-.2-.2-.3-.2h-1c-.1 0-.2.1-.2.3l1.1 3.5-1.1 1.6c-.1.1 0 .3.2.3h1c.1 0 .2 0 .2-.1l3.5-5.3c.1-.1 0-.3-.2-.3z"
      fill="#38519f"
    />
    <path
      d="M24.6 12.2c-.1.8-.7.8-1.3.8H23l.2-1.5c0-.1.1-.2.2-.2h.2c.4 0 .8 0 1 .2 0 .2.1.4 0 .7zm-.2-2.1h-2.2c-.2 0-.3.1-.3.3l-.9 5.8c0 .1.1.2.2.2h1.1c.1 0 .2-.1.2-.2l.2-1.6c0-.2.2-.3.3-.3h.7c1.4 0 2.3-.7 2.5-2.2.1-.6 0-1.1-.3-1.5-.2-.3-.8-.5-1.5-.5zM29.4 14.3c-.1.6-.6 1-1.2 1-.3 0-.5-.1-.7-.3-.2-.2-.2-.5-.2-.8.1-.6.6-1.1 1.2-1.1.3 0 .5.1.7.3.2.4.3.6.2.9zm1.5-2.1h-1c-.1 0-.2.1-.2.2v.3l-.1-.1c-.2-.3-.7-.5-1.2-.5-1.1 0-2.1.9-2.3 2.2-.1.6 0 1.2.4 1.7.3.4.8.5 1.3.5.9 0 1.4-.6 1.4-.6v.3c0 .1.1.2.2.2h.9c.2 0 .3-.1.3-.3l.6-3.7c-.1-.1-.2-.2-.3-.2zM32.1 10.3l-.9 5.9c0 .1.1.2.2.2h.9c.2 0 .3-.1.3-.3l.9-5.8c0-.1-.1-.2-.2-.2h-1c-.1 0-.2.1-.2.2z"
      fill="#179bd7"
    />
    <path
      d="M37.2.6c.7 0 1.2.5 1.2 1.2v22.3c0 .7-.5 1.2-1.2 1.2H1.8c-.7 0-1.2-.5-1.2-1.2V1.9c0-.7.5-1.2 1.2-1.2h35.4m0-.7H1.8C.8 0 0 .8 0 1.9v22.3c0 1 .8 1.9 1.8 1.9h35.4c1 0 1.8-.8 1.8-1.9V1.9C39 .8 38.2 0 37.2 0z"
      opacity={0.1}
    />
  </svg>
);

export default baseSVG.withComponent(Paypal);
// @flow
import React from 'react';
import { paymentTypes as baseSVG } from '../../styled-base-svgs';
import type { PaymentSVGProps } from '../../flow-types';

const Mastercard = (props: PaymentSVGProps) => (
  <svg viewBox="0 0 39 26" {...props}>
    <path
      d="M1.8 0h35.4c1 0 1.8.8 1.8 1.9v22.3c0 1-.8 1.9-1.8 1.9H1.8c-1 0-1.8-.8-1.8-1.9V1.9C0 .8.8 0 1.8 0z"
      fill="#f5f6f8"
    />
    <path
      d="M19.5 7.7c1.2-1 2.7-1.6 4.3-1.6 3.8 0 6.8 3 6.8 6.8s-3.1 6.8-6.8 6.8c-1.6 0-3.2-.6-4.3-1.6C21 17 22 15.1 22 13s-1-4-2.5-5.3z"
      fill="#f7a213"
    />
    <path
      d="M19.5 7.7c-1.2-1-2.7-1.6-4.3-1.6-3.8 0-6.8 3-6.8 6.8s3.1 6.8 6.8 6.8c1.6 0 3.2-.6 4.3-1.6C18 17 17 15.1 17 13s1-4 2.5-5.3z"
      fill="#eb141c"
    />
    <path
      d="M19.5 18.3C21 17 22 15.1 22 13s-1-4-2.5-5.3C18 9 17 10.9 17 13s1 4 2.5 5.3z"
      fill="#fe6412"
    />
    <path
      d="M37.2.6c.7 0 1.2.5 1.2 1.2v22.3c0 .7-.5 1.2-1.2 1.2H1.8c-.7 0-1.2-.5-1.2-1.2V1.9c0-.7.5-1.2 1.2-1.2h35.4m0-.7H1.8C.8 0 0 .8 0 1.9v22.3c0 1 .8 1.9 1.8 1.9h35.4c1 0 1.8-.8 1.8-1.9V1.9C39 .8 38.2 0 37.2 0z"
      fill="#dcdddf"
    />
  </svg>
);

export default baseSVG.withComponent(Mastercard);

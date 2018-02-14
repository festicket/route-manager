// @flow
import React from 'react';
import { functional as baseSVG } from '../../styled-base-svgs';
import type { FunctionalSVGProps } from '../../flow-types';

const Close = (props: FunctionalSVGProps) => (
  <svg viewBox="0 0 32 32" {...props}>
    <path d="M18.507 16l9.404-9.404a1.778 1.778 0 0 0-2.51-2.505l-9.402 9.402-9.404-9.422a1.785 1.785 0 1 0-2.524 2.524l9.422 9.404-9.422 9.404a1.778 1.778 0 1 0 2.505 2.509L16 18.505l9.404 9.404a1.778 1.778 0 0 0 2.505-2.51z" />
  </svg>
);

export default baseSVG.withComponent(Close);

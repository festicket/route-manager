// @flow

import React from 'react';
import { storiesOf } from '@storybook/react';

import Anchor from './';

const El = ({ to, children, className }) => (
  <abbr title={to} className={className}>
    {children}
  </abbr>
);

storiesOf('Components / Text / Anchor', module)
  .add('Standard - normal href', () => (
    <Anchor href="https://www.google.com">Google</Anchor>
  ))
  .add('Hyperlink - normal href', () => (
    <Anchor variant="hyperlink" href="https://www.google.com">
      Google
    </Anchor>
  ))
  .add('Navigation - normal href', () => (
    <Anchor variant="navigation" href="https://www.google.com">
      Google
    </Anchor>
  ))
  .add('with email prop', () => (
    <Anchor email="helpdesk@festicket.com">Helpdesk</Anchor>
  ))
  .add('with custom element', () => (
    <Anchor to="https://www.google.com" element={El} variant="standard">
      Google
    </Anchor>
  ));

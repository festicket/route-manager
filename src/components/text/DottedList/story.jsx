// @flow

import React from 'react';
import { storiesOf } from '@storybook/react';
import DottedList from './';

storiesOf('Components / Text / DottedList', module)
  .add('default', () => (
    <DottedList.List>
      <DottedList.ListItem>First item</DottedList.ListItem>
      <DottedList.ListItem>Second item</DottedList.ListItem>
      <DottedList.ListItem>Third item</DottedList.ListItem>
      <DottedList.ListItem>Forth item</DottedList.ListItem>
    </DottedList.List>
  ))
  .add('very long list', () => (
    <DottedList.List>
      <DottedList.ListItem>Arctic Monkeys</DottedList.ListItem>
      <DottedList.ListItem>Nine Inch Nails</DottedList.ListItem>
      <DottedList.ListItem>Snow Patrol</DottedList.ListItem>
      <DottedList.ListItem>Miguel Araújo</DottedList.ListItem>
      <DottedList.ListItem>Queens of the Stone Age</DottedList.ListItem>
      <DottedList.ListItem>The National</DottedList.ListItem>
      <DottedList.ListItem>Two Door Cinema Club</DottedList.ListItem>
      <DottedList.ListItem>The Kooks</DottedList.ListItem>
      <DottedList.ListItem>Black Rebel Motorcycle Club</DottedList.ListItem>
      <DottedList.ListItem>Bryan Ferry</DottedList.ListItem>
      <DottedList.ListItem>Khalid</DottedList.ListItem>
      <DottedList.ListItem>Friendly Fires</DottedList.ListItem>
      <DottedList.ListItem>Wolf Alice</DottedList.ListItem>
      <DottedList.ListItem>Sampha</DottedList.ListItem>
      <DottedList.ListItem>Jain</DottedList.ListItem>
      <DottedList.ListItem>Orelha Negra</DottedList.ListItem>
      <DottedList.ListItem>SOPHIE</DottedList.ListItem>
      <DottedList.ListItem>PAUS + Holly Hood</DottedList.ListItem>
      <DottedList.ListItem>DJ Glue</DottedList.ListItem>
      <DottedList.ListItem>Fumaxa</DottedList.ListItem>
      <DottedList.ListItem>Spdeville</DottedList.ListItem>
      <DottedList.ListItem>Dead End</DottedList.ListItem>
      <DottedList.ListItem>Pearl Jam</DottedList.ListItem>
      <DottedList.ListItem>Jack White</DottedList.ListItem>
      <DottedList.ListItem>Franz Ferdinand</DottedList.ListItem>
      <DottedList.ListItem>MGMT</DottedList.ListItem>
      <DottedList.ListItem>Alice In Chains</DottedList.ListItem>
      <DottedList.ListItem>The Last Internationale</DottedList.ListItem>
    </DottedList.List>
  ));

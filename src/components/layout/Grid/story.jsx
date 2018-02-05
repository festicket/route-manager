import React from 'react';
import { storiesOf } from '@storybook/react';

import { Grid, GridElement } from './';

storiesOf('Components / Layout / Grid', module)
  .add('2 Columns', () => (
    <Grid>
      <GridElement width={1 / 2}>First Element</GridElement>
      <GridElement width={1 / 2}>Second Element</GridElement>
      <GridElement width={1 / 2}>Third Element</GridElement>
      <GridElement width={1 / 2}>Fourth Element</GridElement>
    </Grid>
  ))
  .add('3 Columns', () => (
    <Grid>
      <GridElement width={1 / 3}>First Element</GridElement>
      <GridElement width={1 / 3}>Second Element</GridElement>
      <GridElement width={1 / 3}>Third Element</GridElement>
      <GridElement width={1 / 3}>Fourth Element</GridElement>
    </Grid>
  ))
  .add('3 Columns with span', () => (
    <Grid>
      <GridElement width={2 / 3}>First Element</GridElement>
      <GridElement width={1 / 3}>Second Element</GridElement>
      <GridElement width={1 / 3}>Third Element</GridElement>
      <GridElement width={1 / 3}>Fourth Element</GridElement>
    </Grid>
  ))
  .add('4 Columns', () => (
    <Grid>
      <GridElement width={1 / 4}>First Element</GridElement>
      <GridElement width={1 / 4}>Second Element</GridElement>
      <GridElement width={1 / 4}>Third Element</GridElement>
      <GridElement width={1 / 4}>Fourth Element</GridElement>
    </Grid>
  ))
  .add('Responsive Columns', () => (
    <Grid>
      <GridElement
        width={{
          sm: 1 / 2,
          md: 1 / 3,
          lg: 1 / 4,
          xlg: 1 / 5,
        }}
      >
        First Element
      </GridElement>
      <GridElement
        width={{
          sm: 1 / 2,
          md: 1 / 3,
          lg: 1 / 4,
          xlg: 1 / 5,
        }}
      >
        Second Element
      </GridElement>
      <GridElement
        width={{
          sm: 1 / 2,
          md: 1 / 3,
          lg: 1 / 4,
          xlg: 1 / 5,
        }}
      >
        Third Element
      </GridElement>
      <GridElement
        width={{
          sm: 1 / 2,
          md: 1 / 3,
          lg: 1 / 4,
          xlg: 1 / 5,
        }}
      >
        Fourth Element
      </GridElement>
      <GridElement
        width={{
          sm: 1 / 2,
          md: 1 / 3,
          lg: 1 / 4,
          xlg: 1 / 5,
        }}
      >
        Fifth Element
      </GridElement>
      <GridElement
        width={{
          sm: 1 / 2,
          md: 1 / 3,
          lg: 1 / 4,
          xlg: 1 / 5,
        }}
      >
        Sixth Element
      </GridElement>
      <GridElement
        width={{
          sm: 1 / 2,
          md: 1 / 3,
          lg: 1 / 4,
          xlg: 1 / 5,
        }}
      >
        Seventh Element
      </GridElement>
      <GridElement
        width={{
          sm: 1 / 2,
          md: 1 / 3,
          lg: 1 / 4,
          xlg: 1 / 5,
        }}
      >
        Eighth Element
      </GridElement>
    </Grid>
  ));

import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import { Grid, GridElement } from '../';

describe('<Grid />', () => {
  test('with initial props', () => {
    const wrapper = shallow(<Grid />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  test('with 1 column', () => {
    const wrapper = shallow(
      <Grid>
        <GridElement width={1 / 1}>Item 1</GridElement>
        <GridElement width={1 / 1}>Item 2</GridElement>
        <GridElement width={1 / 1}>Item 3</GridElement>
        <GridElement width={1 / 1}>Item 4</GridElement>
        <GridElement width={1 / 1}>Item 5</GridElement>
      </Grid>,
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  test('with 2 columns', () => {
    const wrapper = shallow(
      <Grid>
        <GridElement width={1 / 2}>Item 1</GridElement>
        <GridElement width={1 / 2}>Item 2</GridElement>
        <GridElement width={1 / 2}>Item 3</GridElement>
        <GridElement width={1 / 2}>Item 4</GridElement>
        <GridElement width={1 / 2}>Item 5</GridElement>
      </Grid>,
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  test('with 3 columns', () => {
    const wrapper = shallow(
      <Grid>
        <GridElement width={1 / 3}>Item 1</GridElement>
        <GridElement width={1 / 3}>Item 2</GridElement>
        <GridElement width={1 / 3}>Item 3</GridElement>
        <GridElement width={1 / 3}>Item 4</GridElement>
        <GridElement width={1 / 3}>Item 5</GridElement>
      </Grid>,
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  test('with 3 columns and span', () => {
    const wrapper = shallow(
      <Grid>
        <GridElement width={2 / 3}>Item 1</GridElement>
        <GridElement width={1 / 3}>Item 2</GridElement>
        <GridElement width={1 / 3}>Item 3</GridElement>
        <GridElement width={1 / 3}>Item 4</GridElement>
        <GridElement width={1 / 3}>Item 5</GridElement>
      </Grid>,
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  test('with 4 columns', () => {
    const wrapper = shallow(
      <Grid>
        <GridElement width={1 / 4}>Item 1</GridElement>
        <GridElement width={1 / 4}>Item 2</GridElement>
        <GridElement width={1 / 4}>Item 3</GridElement>
        <GridElement width={1 / 4}>Item 4</GridElement>
        <GridElement width={1 / 4}>Item 5</GridElement>
      </Grid>,
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  test('with 5 columns', () => {
    const wrapper = shallow(
      <Grid>
        <GridElement width={1 / 5}>Item 1</GridElement>
        <GridElement width={1 / 5}>Item 2</GridElement>
        <GridElement width={1 / 5}>Item 3</GridElement>
        <GridElement width={1 / 5}>Item 4</GridElement>
        <GridElement width={1 / 5}>Item 5</GridElement>
      </Grid>,
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  test('with custom Grid element', () => {
    const wrapper = shallow(
      <Grid element="article">
        <GridElement width={1 / 2}>Item 1</GridElement>
        <GridElement width={1 / 2}>Item 2</GridElement>
        <GridElement width={1 / 2}>Item 3</GridElement>
        <GridElement width={1 / 2}>Item 4</GridElement>
        <GridElement width={1 / 2}>Item 5</GridElement>
      </Grid>,
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  test('with custom Grid and GridElement elements', () => {
    const wrapper = shallow(
      <Grid element="article">
        <GridElement element="section" width={1 / 2}>
          Item 1
        </GridElement>
        <GridElement element="section" width={1 / 2}>
          Item 2
        </GridElement>
        <GridElement element="section" width={1 / 2}>
          Item 3
        </GridElement>
        <GridElement element="section" width={1 / 2}>
          Item 4
        </GridElement>
        <GridElement element="section" width={1 / 2}>
          Item 5
        </GridElement>
      </Grid>,
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  test('with responsive columns', () => {
    const wrapper = shallow(
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
      </Grid>,
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});

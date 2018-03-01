// @flow

import React from 'react';
import { Details } from '@festicket/react-ui-components';

import { renderWithTheme } from '../../../../utils/testing';
import { title, body } from './fixtures';

describe('<Details />', () => {
  test('with initial props', () => {
    const tree = renderWithTheme(<Details title={title}>{body}</Details>);
    expect(tree).toMatchSnapshot();
  });

  test('with openInitially prop', () => {
    const tree = renderWithTheme(
      <Details title={title} openInitially>
        {body}
      </Details>,
    );
    expect(tree).toMatchSnapshot();
  });
});

// @flow

import * as React from 'react';
import styled, { css } from 'styled-components';
import { prop, ifProp, switchProp } from 'styled-tools';

const defaultHeight = 200;
const offsetMultiplier = 2;
/*
This crazy thing calculates how far down the slant of the polygon should start,
while retaining the overall angle.
*/
const offsetPolygonPosition = `${(1 - 1 / offsetMultiplier) * 100}%`;

const StyledSlantedBackground = styled.div`
  position: relative;
  overflow: hidden;
  min-height: ${ifProp(
    'slantVerticalOffset',
    `${defaultHeight * offsetMultiplier}px`,
    `${defaultHeight}px`,
  )};
  background: ${switchProp('backgroundVariant', {
    none: 'none',
    primary: prop('theme.colors.brand.primary'),
    grey: prop('theme.colors.greyscale.grey'),
  })};

  > * {
    position: relative;
  }

  &::before {
    display: block;
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    min-width: 2000px;
    width: 100%;

    /*
    Use of min-width and width preserves the angle of the slant up
    until 2000px, then spans the full width of the user's massive monitor
    */

    height: ${ifProp(
      'slantVerticalOffset',
      `${defaultHeight * offsetMultiplier}px`,
      `${defaultHeight}px`,
    )};

    background: ${switchProp('slantVariant', {
      white: prop('theme.colors.white'),
      primary: prop('theme.colors.brand.primary'),
      grey: prop('theme.colors.greyscale.grey'),
    })};

    -webkit-clip-path: polygon(
      ${switchProp('slantHorizontalDirection', {
        'to-left': css`0 0, 100% 0, 100% ${ifProp(
          'slantVerticalOffset',
          offsetPolygonPosition,
          '0',
        )}, 0 100%`,
        'to-right': css`0 0, 100% 0, 100% 100%, 0 ${ifProp(
          'slantVerticalOffset',
          offsetPolygonPosition,
          '0',
        )}`,
      })}
    );

    clip-path: polygon(
      ${switchProp('slantHorizontalDirection', {
        'to-left': css`0 0, 100% 0, 100% ${ifProp(
          'slantVerticalOffset',
          offsetPolygonPosition,
          '0',
        )}, 0 100%`,
        'to-right': css`0 0, 100% 0, 100% 100%, 0 ${ifProp(
          'slantVerticalOffset',
          offsetPolygonPosition,
          '0',
        )}`,
      })}
    );

    /*
    styled-components does not yet have support for prefixing
    the clip-path property, so duplicate for now.
    */
  }
`;

type Props = {|
  backgroundVariant?: 'primary' | 'grey',
  slantVariant?: 'primary' | 'grey' | 'white',
  slantHorizontalDirection: 'to-left' | 'to-right',
  slantVerticalOffset: boolean,
  children: React.Node,
|};

SlantedBackground.defaultProps = {
  slantHorizontalDirection: 'to-right',
  slantVerticalOffset: false,
};

export default function SlantedBackground(props: Props) {
  return <StyledSlantedBackground {...props} />;
}

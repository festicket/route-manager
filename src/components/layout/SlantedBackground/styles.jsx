// @flow

import styled, { css } from 'styled-components';
import { prop, ifProp, switchProp } from 'styled-tools';

const height = 200;
const offsetPosition = 200;

export const StyledSlantedBackground = styled.div`
  position: relative;
  overflow: hidden;
  /*
  The z-index must be set to 0 in order to create a new stacking context.
  */
  z-index: 0;
  min-height: ${ifProp(
    'slantVerticalOffset',
    height + offsetPosition,
    height,
  )}px;
  background: ${switchProp('backgroundVariant', {
    none: 'none',
    primary: prop('theme.colors.brand.primary'),
    grey: prop('theme.colors.greyscale.grey'),
  })};

  ${ifProp('contentVerticalOffset', `padding-top: ${height}px`)};

  > * {
    position: relative;
  }

  ${ifProp(
    'slantVerticalOffset',
    css`
      &::after {
        display: block;
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: ${offsetPosition}px;
        background: ${switchProp('slantVariant', {
          white: prop('theme.colors.white'),
          primary: prop('theme.colors.brand.primary'),
          grey: prop('theme.colors.greyscale.grey'),
        })};
        z-index: -1;
      }
    `,
  )};

  &::before {
    display: block;
    content: '';
    position: absolute;
    top: ${ifProp('slantVerticalOffset', `${offsetPosition}px`, '0')};
    left: 50%;
    transform: translateX(-50%);
    min-width: 2000px;
    width: 100%;
    z-index: -1;

    /*
    Use of min-width and width preserves the angle of the slant up
    until 2000px, then spans the full width of the user's massive monitor
    */

    height: ${height}px;

    background: ${switchProp('slantVariant', {
      white: prop('theme.colors.white'),
      primary: prop('theme.colors.brand.primary'),
      grey: prop('theme.colors.greyscale.grey'),
    })};

    -webkit-clip-path: polygon(
      ${switchProp('slantHorizontalDirection', {
        'to-left': '0 0, 100% 0, 100% 0, 0 100%',
        'to-right': '0 0, 100% 0, 100% 100%, 0 0',
      })}
    );

    clip-path: polygon(
      ${switchProp('slantHorizontalDirection', {
        'to-left': '0 0, 100% 0, 100% 0, 0 100%',
        'to-right': '0 0, 100% 0, 100% 100%, 0 0',
      })}
    );

    /*
    styled-components does not yet have support for prefixing
    the clip-path property, so duplicate for now.
    */
  }
`;

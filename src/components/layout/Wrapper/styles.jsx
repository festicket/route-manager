// @flow

import styled, { css } from 'styled-components';
import { prop, ifProp, switchProp } from 'styled-tools';
import breakpoint from '../../../utils/breakpoint';

export const SlantedBackgroundWrapper = styled.div`
  position: relative;
  overflow: hidden;
  min-height: ${ifProp('slantVerticalOffset', '400px', '200px')};
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

    height: ${ifProp('slantVerticalOffset', '400px', '200px')};

    background: ${switchProp('slantVariant', {
      white: prop('theme.colors.white'),
      primary: prop('theme.colors.brand.primary'),
      grey: prop('theme.colors.greyscale.grey'),
    })};

    -webkit-clip-path: polygon(
      ${switchProp('slantHorizontalDirection', {
        'to-left': css`0 0, 100% 0, 100% ${ifProp(
          'slantVerticalOffset',
          '50%',
          '0',
        )}, 0 100%`,
        'to-right': css`0 0, 100% 0, 100% 100%, 0 ${ifProp(
          'slantVerticalOffset',
          '50%',
          '0',
        )}`,
      })}
    );

    clip-path: polygon(
      ${switchProp('slantHorizontalDirection', {
        'to-left': css`0 0, 100% 0, 100% ${ifProp(
          'slantVerticalOffset',
          '50%',
          '0',
        )}, 0 100%`,
        'to-right': css`0 0, 100% 0, 100% 100%, 0 ${ifProp(
          'slantVerticalOffset',
          '50%',
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

export const Container = styled.div`
  ${switchProp('size', {
    normal: css`
      max-width: 100%;
      margin: 0 auto;
      padding: 0 20px;

      ${breakpoint('from-sm')`
        padding: 0 50px;
      `};

      ${breakpoint('from-lg')`
        width: 1220px;
      `};`,
    alternative: css`
      max-width: 100%;
      margin: 0 auto;
      padding: 0 20px;

      ${breakpoint('from-sm')`
        padding: 0 50px;
      `};

      ${breakpoint('from-md')`
        width: 650px;
      `};

      ${breakpoint('from-lg')`
        width: 800px;
      `};`,
  })};
`;

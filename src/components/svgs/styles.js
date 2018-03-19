// @flow

/**
 * @file Contains the base Styled Component that is used by the different types of SVGs.
 *
 * The `StyledSVG` should be used with the components created by `svgr`
 * For example: `StyledSVG.withComponent(FesticketLogoSymbol);`
 */
import styled, { css } from 'styled-components';
import { ifProp } from 'styled-tools';

import { colorMixin, hoverColorMixin } from '../../utils/mixins';

const hoverStylesMixin = ifProp(
  'hoverable',
  css`
    cursor: pointer;
    &:hover {
      fill: ${hoverColorMixin};
    }
  `,
);

export const StyledSVG = styled.svg`
  fill: ${colorMixin};
  ${hoverStylesMixin};
`;

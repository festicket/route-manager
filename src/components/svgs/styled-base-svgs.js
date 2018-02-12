// @flow

/**
 * @file Contains the base Styled Components that are used by the different types of SVGs.
 *
 * The exported React Components from this file should be used with the components created by `svgr`
 * For example: `logo.withComponent(FesticketLogoSymbol);`
 */

import styled from 'styled-components';

import { hoverStylesMixin, logoHeightVariations } from './styles';
import { colorMixin } from '../../utils/mixins';

/**
 * The base styles to be applied to generated Logo SVGs
 *
 * Usage: `baseSVG.withComponent(SvgComponent);`
 */
export const logo = styled.svg`
  ${logoHeightVariations};
  fill: ${colorMixin};
  ${hoverStylesMixin};
`;

/**
 * The base styles to be applied to generated Functional SVGs
 *
 * Usage: `baseSVG.withComponent(SvgComponent);`
 */
export const functional = styled.svg`
  height: 18px;
  fill: ${colorMixin};
  ${hoverStylesMixin};
`;

/**
 * The base styles to be applied to generated Payment Type SVGs
 *
 * Usage: `baseSVG.withComponent(SvgComponent);`
 */
export const paymentTypes = styled.svg`
  height: 26px;
`;

/**
 * The base styles to be applied to generated Social SVGs
 *
 * Usage: `baseSVG.withComponent(SvgComponent);`
 */
export const social = styled.svg`
  height: 22px;
  fill: ${colorMixin};
  ${hoverStylesMixin};
`;

/**
 * The base styles to be applied to generated Trust Company SVGs
 *
 * Usage: `baseSVG.withComponent(SvgComponent);`
 */
export const trustCompanies = social;

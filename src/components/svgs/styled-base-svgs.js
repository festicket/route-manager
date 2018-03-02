// @flow

/**
 * @file Contains the base Styled Components that are used by the different types of SVGs.
 *
 * The exported React Components from this file should be used with the components created by `svgr`
 * For example: `baseSVG.withComponent(FesticketLogoSymbol);`
 */

import styled from 'styled-components';
import { colorMixin } from 'src/utils/mixins';

import { hoverStylesMixin, logoHeightVariations } from './styles';

/**
 * The base styles to be applied to generated Logo SVGs
 *
 * Usage: `logo.withComponent(SvgComponent);`
 */
export const logo = styled.svg`
  ${logoHeightVariations};
  fill: ${colorMixin};
  ${hoverStylesMixin};
`;

/**
 * The base styles to be applied to generated Functional SVGs
 *
 * Usage: `functional.withComponent(SvgComponent);`
 */
export const functional = styled.svg`
  height: 18px;
  fill: ${colorMixin};
  ${hoverStylesMixin};
`;

/**
 * The base styles to be applied to generated Payment Type SVGs
 *
 * Usage: `paymentTypes.withComponent(SvgComponent);`
 */
export const paymentTypes = styled.svg`
  height: 26px;
`;

/**
 * The base styles to be applied to generated Social SVGs
 *
 * Usage: `social.withComponent(SvgComponent);`
 */
export const social = styled.svg`
  height: 22px;
  fill: ${colorMixin};
  ${hoverStylesMixin};
`;

/**
 * The base styles to be applied to generated Trust Company SVGs
 *
 * Usage: `trustCompanies.withComponent(SvgComponent);`
 */
export const trustCompanies = social;

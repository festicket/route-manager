// @flow

/**
 * @file Contains the base Styled Components that are used by the different types of SVGs.
 *
 * The exported ReactElements from this file should be used with the components created by `svgr`.
 * for example: `logo.withComponent(FesticketLogoSymbol);`
 */

import styled from 'styled-components';
import {
  svgColorVariations,
  functionalSvgColorVariations,
} from './styles/color-styles';
import {
  svgHoverColorVariations,
  functionalSvgHoverColorVariations,
} from './styles/hover-styles';
import { logoHeightVariations } from './styles/logo-size-styles';

export const logo = styled.svg`
  ${svgColorVariations}
  ${svgHoverColorVariations}
  ${logoHeightVariations}
`;

export const functional = styled.svg`
  height: 18px;
  ${functionalSvgColorVariations} ${functionalSvgHoverColorVariations};
`;

export const paymentTypes = styled.svg`
  height: 26px;
`;

export const social = styled.svg`
  height: 22px;
  ${svgColorVariations} ${svgHoverColorVariations};
`;

export const trustCompanies = social;

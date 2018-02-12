// @flow

/**
 * @file Contains the base Styled Components that are used by the different types of SVGs.
 *
 * The exported ReactElements from this file should be used with the components created by `svgr`.
 * for example: `logo.withComponent(FesticketLogoSymbol);`
 */

import styled from 'styled-components';

import { hoverStylesMixin, logoHeightVariations } from './styles';
import { colorMixin } from '../../utils/mixins';

export const logo = styled.svg`
  ${logoHeightVariations};
  fill: ${colorMixin};
  ${hoverStylesMixin};
`;

export const functional = styled.svg`
  height: 18px;
  fill: ${colorMixin};
  ${hoverStylesMixin};
`;

export const paymentTypes = styled.svg`
  height: 26px;
`;

export const social = styled.svg`
  height: 22px;
  fill: ${colorMixin};
  ${hoverStylesMixin};
`;

export const trustCompanies = social;

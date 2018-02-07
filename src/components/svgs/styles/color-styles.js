// @flow
import { functionalSvgColors, svgColors } from './colors';

export const svgColorVariations = (props: { color: string }) => `
  fill: ${svgColors[props.color]};
`;

export const functionalSvgColorVariations = (props: { color: string }) => `
  fill: ${functionalSvgColors[props.color]};
`;

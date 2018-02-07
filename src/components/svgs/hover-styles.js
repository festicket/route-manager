// @flow
import { functionalSvgHoverColors, svgHoverColors } from './colors';

const hoverStyle = colorMapping => (props: { color: string }) => `
cursor: pointer;
&:hover {
  fill: ${colorMapping[props.color]};
}
`;

const colorVariationGenerator = colorMapping => (props: {
  color: string,
  hoverable: boolean,
}) => (props.hoverable ? hoverStyle(colorMapping) : null);

export const svgHoverColorVariations = colorVariationGenerator(svgHoverColors);
export const functionalSvgHoverColorVariations = colorVariationGenerator(
  functionalSvgHoverColors,
);

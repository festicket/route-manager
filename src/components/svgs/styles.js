import { lighten, darken } from 'polished';

export const colors = {
  light: '#E00',
  dark: '#0E0',
  theme: '#00E',
};

export const colorsHover = {
  light: darken(0.2, colors.light),
  dark: lighten(0.2, colors.dark),
  theme: lighten(0.2, colors.theme),
};

export const colorVariations = props => `
  fill: ${colors[props.color]};
`;

export const hoverColorVariations = props => `
  cursor: pointer;
  &:hover {
    fill: ${colorsHover[props.color]};
  }
`;

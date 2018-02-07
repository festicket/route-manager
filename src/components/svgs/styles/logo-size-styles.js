// @flow
export const LOGO_SMALL = 'small';
export const LOGO_BIG = 'big';

const logoHeights = {
  [LOGO_SMALL]: '38px',
  [LOGO_BIG]: '68px',
};

export const logoHeightVariations = (props: { size: string }) => `
  height: ${logoHeights[props.size]};
`;

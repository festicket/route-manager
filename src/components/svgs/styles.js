// @flow
import { css } from 'styled-components';
import { switchProp } from 'styled-tools';

import { hoverColorMixin } from '../../utils/mixins';

export const LOGO_SMALL = 'small';
export const LOGO_BIG = 'big';

export const logoHeightVariations = css`
  height: ${switchProp('size', {
    [LOGO_SMALL]: '38px',
    [LOGO_BIG]: '68px',
  })};
`;

const hoverStyles = css`
  cursor: pointer;
  &:hover {
    fill: ${hoverColorMixin};
  }
`;

export const hoverStylesMixin = (props: { hoverable: string }) =>
  props.hoverable ? hoverStyles : null;

// @flow
import { css } from 'styled-components';
import { switchProp, ifProp } from 'styled-tools';

import { hoverColorMixin } from '../../utils/mixins';

export const LOGO_SMALL = 'small';
export const LOGO_BIG = 'big';

export const logoHeightVariations = switchProp('size', {
  [LOGO_SMALL]: 'height: 38px',
  [LOGO_BIG]: 'height: 68px',
});

export const hoverStylesMixin = ifProp(
  'hoverable',
  css`
    cursor: pointer;
    &:hover {
      fill: ${hoverColorMixin};
    }
  `,
);

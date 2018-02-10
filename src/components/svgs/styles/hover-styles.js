// @flow
import { css } from 'styled-components';
import { hoverColorMixin } from '../../../utils/mixins';

const hoverStyles = () => css`
  cursor: pointer;
  &:hover {
    fill: ${hoverColorMixin};
  }
`;

export const hoverStylesMixin = (props: { hoverable: boolean }) =>
  props.hoverable ? hoverStyles : null;

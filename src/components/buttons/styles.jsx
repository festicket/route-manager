// @flow
import { css } from 'styled-components';

export default function buttonMixin() {
  return css`
    display: inline-block;
    text-align: center;
    cursor: pointer;
    font-weight: bold;
    border-radius: 0;
    padding: 0;
    font-size: 0;
  `;
}

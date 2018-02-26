// @flow
import { css } from 'styled-components';

/*
Font size is reset to 0 on the outer element in order to prevent
any whitespace between the outer element and the child flex wrapper 

https://stackoverflow.com/questions/5078239/how-do-i-remove-the-space-between-inline-block-elements
*/
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

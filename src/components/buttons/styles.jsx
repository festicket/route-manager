// @flow
import { css } from 'styled-components';
import { switchProp } from 'styled-tools';

export default function buttonMixin() {
  return css`
    display: inline-block;
    text-align: center;
    cursor: pointer;
    font-weight: bold;
    border-radius: 0;

    ${switchProp('size', {
      regular: css`
        min-width: 200px;
        min-height: 50px;
        padding: 15px 30px;`,
      small: css`
        min-width: 75px;
        min-height: 40px;
        padding: 10px 15px;`,
      inline: css`
        padding: 0;`,
    })};
  `;
}

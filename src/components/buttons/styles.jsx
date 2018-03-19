// @flow

import styled, { css } from 'styled-components';
import { switchProp, prop } from 'styled-tools';

/*
Due to a Safari 10.1 bug, we must add a wrapping flex div inside the button,
as buttons cannot themselves be flex containers.

https://stackoverflow.com/questions/35464067/flexbox-not-working-on-button-or-fieldset-elements
*/
export const FlexWrapper = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;

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

/*
Font size is reset to 0 on the outer element in order to prevent
any whitespace between the outer element and the child flex wrapper

https://stackoverflow.com/questions/5078239/how-do-i-remove-the-space-between-inline-block-elements
*/
export function buttonMixin() {
  return css`
    display: inline-block;
    text-align: center;
    cursor: pointer;
    font-weight: ${prop('theme.fontWeight.bold')};
    border-radius: 0;
    padding: 0;
    font-size: 0;
  `;
}

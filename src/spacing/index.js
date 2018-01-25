import { css } from 'styled-components';
import breakpoint from '../breakpoints/index';

export default (size: string) => {
  switch (size) {
    case 'xl':
      return css`
        margin-bottom: 30px;

        ${breakpoint('from-sm')`
          margin-bottom: 35px;
        `};

        ${breakpoint('from-md')`
          margin-bottom: 40px;
        `};
      `;
    case 'lg':
      return css`
        margin-bottom: 20px;

        ${breakpoint('from-sm')`
          margin-bottom: 25px;
        `};

        ${breakpoint('from-md')`
          margin-bottom: 30px;
        `};
      `;
    case 'md':
      return css`
        margin-bottom: 20px;
      `;
    case 'sm':
      return css`
        margin-bottom: 10px;
      `;
    case 'none':
      return css`
        margin-bottom: 0;
      `;
    default:
      return css`
        margin-bottom: 5px;
      `;
  }
};

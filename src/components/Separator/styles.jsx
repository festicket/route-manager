import styled, { css } from 'styled-components';
import { prop, ifProp, switchProp } from 'styled-tools';

const spacing = 10;

const lineColor = switchProp('variant', {
  light: prop('theme.colors.white'),
  medium: prop('theme.colors.greyscale.silver'),
  dark: prop('theme.colors.greyscale.dark'),
});

const line = css`
  content: '';
  display: block;
  flex: 1 1 auto;
  height: 0;
  width: 50%;
  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${lineColor};
`;

export const HR = styled.hr`
  border: none;
  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-color: ${lineColor};
  ${ifProp(
    'margin',
    css`
      margin: 10px 0;
    `,
  )};
  ${ifProp(
    'marginLarge',
    css`
      margin: 50px 0;
    `,
  )};
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;

  &::before {
    ${line};
    margin-right: ${spacing}px;
  }

  &::after {
    ${line};
    margin-left: ${spacing}px;
  }
`;

export const Content = styled.div`
  flex: 0 0 auto;
`;

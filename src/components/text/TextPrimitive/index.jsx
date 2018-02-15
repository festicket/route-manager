// @flow
import * as React from 'react';
import styled, { css } from 'styled-components';
import { prop, switchProp, ifProp } from 'styled-tools';

import breakpoint from '../../../utils/breakpoint';
import spaceMixin from '../../../utils/spacing';

// Takes props object but we are only interested in passing className.
// Otherwise we will get annoying warnings about invalid props on html elements.
function stripUnwantedProps({ className, id }): any {
  return { className, id };
}

function Primitive({ element = 'p', children, ...props }: any) {
  return React.createElement(element, stripUnwantedProps(props), children);
}

function textMixin() {
  return css`
    font-family: ${prop('theme.fontFamily')};
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;

    font-weight: ${switchProp('weight', {
      bold: css`
        ${prop('theme.fontWeight.bold')};`,
      light: css`
        ${prop('theme.fontWeight.light')};`,
      regular: css`
        ${prop('theme.fontWeight.regular')};`,
    })};

    color: ${switchProp('color', {
      black: css`
        ${prop('theme.colors.greyscale.black')};`,
      grey: css`
        ${prop('theme.colors.greyscale.dark')};`,
      white: css`
        ${prop('theme.colors.white')};`,
      red: css`
        ${prop('theme.colors.danger')};`,
      primary: css`
        ${prop('theme.colors.brand.primary')};`,
      inherit: 'inherit',
    })};

    ${({ spacing }) => spaceMixin(spacing)};

    text-decoration: ${ifProp({ underline: true }, 'underline', 'none')};
  `;
}

const H1 = styled(Primitive)`
  ${textMixin};
  font-size: 36px;
  line-height: 39px;

  ${breakpoint('from-sm')`
    font-size: 42px;
    line-height: 45px;
  `};
  ${breakpoint('from-md')`
    font-size: 48px;
    line-height: 52px;
  `};
`;

const H2 = styled(Primitive)`
  ${textMixin};
  font-size: 26px;
  line-height: 28px;

  ${breakpoint('from-sm')`
    font-size: 30px;
    line-height: 32px;
  `};
  ${breakpoint('from-md')`
    font-size: 32px;
    line-height: 35px;
  `};
`;

const H3 = styled(Primitive)`
  ${textMixin};
  font-size: 18px;
  line-height: 20px;

  ${breakpoint('from-sm')`
    font-size: 20px;
    line-height: 22px;
  `};
`;

const Paragraph = styled(Primitive)`
  ${textMixin};
  margin-bottom: ${switchProp('spacing', {
    none: 0,
    sm: '10px',
    tiny: '5px',
    default: '20px',
  })};
  ${switchProp('size', {
    regular: css`
      font-size: 18px;
      line-height: 1.12;`,
    small: css`
      font-size: 16px;
      line-height: 1.12;`,
    tiny: css`
      font-size: 14px;
      line-height: 1.12;`,
  })};
`;

type Props = {
  element?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span',
  variant?: 'h1' | 'h2' | 'h3' | 'p',
  weight?: 'light' | 'regular' | 'bold',
  size?: 'regular' | 'small' | 'tiny',
  color?: 'white' | 'black' | 'grey' | 'red' | 'inherit',
  spacing?: 'xl' | 'lg' | 'md' | 'sm' | 'tiny' | 'none' | 'default',
  underline?: boolean,
  children: React.Node,
};

export default function TextPrimitive({
  element = 'p',
  weight = 'regular',
  size = 'regular',
  variant = 'p',
  color = 'black',
  spacing = 'md',
  underline = false,
  children,
  ...props
}: Props) {
  switch (variant) {
    case 'h1':
      return (
        <H1
          element={element}
          color={color}
          weight={weight}
          underline={underline}
          spacing={spacing}
          {...props}
        >
          {children}
        </H1>
      );
    case 'h2':
      return (
        <H2
          element={element}
          color={color}
          weight={weight}
          underline={underline}
          spacing={spacing}
          {...props}
        >
          {children}
        </H2>
      );
    case 'h3':
      return (
        <H3
          element={element}
          color={color}
          weight={weight}
          underline={underline}
          spacing={spacing}
          {...props}
        >
          {children}
        </H3>
      );
    default:
      return (
        <Paragraph
          size={size}
          element={element}
          color={color}
          weight={weight}
          underline={underline}
          spacing={spacing}
          {...props}
        >
          {children}
        </Paragraph>
      );
  }
}

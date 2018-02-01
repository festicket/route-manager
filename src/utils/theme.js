// @flow
import { darken } from 'polished';

export function hoverColor(color: string): string {
  return darken(0.05, color);
}

export default {
  colors: {
    white: 'white',
    success: '#57C0B4',
    danger: '#DE5E5E',
    dangerBackground: '#FDF6F6', // primary with transrency 5% on white background
    info: '#A3A6CB',
    star: '#FFCD00',
    background: {
      secondary: '#F9F9FC',
    },
    greyscale: {
      black: '#242529',
      dark: '#A2A4AD',
      silver: '#E2E3E6',
      grey: '#F5F5F5',
    },
    brand: {
      primary: '#8C64CB',
      primaryBackground: '#F9F7FC', // primary with transrency 5% on white background
    },
    facebook: {
      primary: '#4B69AC',
    },
    shadowColor: 'rgba(36, 37, 41, 0.15)',
  },
  animationDuration: {
    shortest: '50ms',
    short: '350ms',
  },
  fontFamily: 'brandon-text, Helvetica Neue, Helvetica, Arial, sans-serif',
  fontWeight: {
    light: '300',
    regular: '400',
    bold: '700',
  },
  breakpoints: {
    xs: 0,
    sm: 568,
    md: 768,
    lg: 960,
    xlg: 1220,
  },
  clipPath: {
    polygonBottomLarge: 'polygon(0 0, 100% 0, 100% 100%, 0 85%)',
  },
};

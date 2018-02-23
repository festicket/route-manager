// @flow

import styled from 'styled-components';
import { darken, rgba } from 'polished';
import ButtonPrimitive from '../ButtonPrimitive';

export const Button = styled(ButtonPrimitive)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 100%;
  padding: 0;
  width: 28px;
  height: 28px;
  cursor: pointer;
  background-color: ${({ theme }) => rgba(theme.colors.greyscale.black, 0.05)};

  &:hover {
    background-color: ${({ theme }) => rgba(theme.colors.greyscale.black, 0.1)};
    color: ${({ theme }) => darken(0.05, theme.colors.greyscale.dark)};
  }
`;
